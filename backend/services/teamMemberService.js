// Service for Team Member Panel APIs

import { prisma } from '../lib/prisma.js';

export const fetchCurrentTasks = async (memberId) => {
  // Fetch all active tasks assigned to the member
  // MemberService is the join table for tasks assigned to members
  // Status: ASSIGNED or IN_PROGRESS
  // Include related user and service domain data, sort by deadline ascending
  return await prisma.memberService.findMany({
    where: {
      member_id: memberId,
      status: { in: ['ASSIGNED', 'IN_PROGRESS'] },
    },
    include: {
      service: {
        include: {
          user: true,
          domain: true,
        },
      },
    },
    orderBy: {
      service: {
        idea_date: 'asc', // Using idea_date as deadline
      },
    },
  });
};

export const fetchTaskHistory = async (memberId, cursor, limit) => {
  // Fetch completed/rejected tasks for the member with pagination
  // Include user rating and feedback if available
  // Sort by completedAt descending
  const take = limit || 10;
  const where = {
    member_id: memberId,
    status: { in: ['COMPLETED', 'REJECTED'] },
  };
  
  const tasks = await prisma.memberService.findMany({
    where,
    include: {
      service: {
        include: {
          user: true,
          domain: true,
        },
      },
    },
    orderBy: {
      completedAt: 'desc',
    },
    take,
    ...(cursor && { skip: 1, cursor: { member_id_service_id: cursor } }),
  });
  
  let nextCursor = null;
  if (tasks.length === take) {
    const last = tasks[tasks.length - 1];
    nextCursor = { member_id: last.member_id, service_id: last.service_id };
  }
  
  return { tasks, nextCursor };
};

export const fetchTaskStats = async (memberId, dateRange = 30) => {
  // Get performance metrics and status distribution
  // Use groupBy for status counts
  // Calculate average completion time
  // Compute average user rating
  // Filter by date ranges (last 30/60/90 days)
  
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - dateRange);
  
  // Status distribution
  const statusCounts = await prisma.memberService.groupBy({
    by: ['status'],
    where: {
      member_id: memberId,
      completedAt: {
        gte: startDate,
      },
    },
    _count: {
      status: true,
    },
  });
  
  // Average completion time (for completed tasks)
  const completedTasks = await prisma.memberService.findMany({
    where: {
      member_id: memberId,
      status: 'COMPLETED',
      completedAt: {
        gte: startDate,
        not: null,
      },
    },
    select: {
      completedAt: true,
      service: {
        select: {
          idea_date: true,
        },
      },
    },
  });
  
  let avgCompletionTime = 0;
  if (completedTasks.length > 0) {
    const totalTime = completedTasks.reduce((sum, task) => {
      const completionTime = task.completedAt - task.service.idea_date;
      return sum + completionTime;
    }, 0);
    avgCompletionTime = totalTime / completedTasks.length;
  }
  
  // Average user rating
  const ratingStats = await prisma.memberService.aggregate({
    where: {
      member_id: memberId,
      rating: {
        not: null,
      },
      completedAt: {
        gte: startDate,
      },
    },
    _avg: {
      rating: true,
    },
    _count: {
      rating: true,
    },
  });
  
  return {
    statusCounts: statusCounts.reduce((acc, item) => {
      acc[item.status] = item._count.status;
      return acc;
    }, {}),
    avgCompletionTime: Math.round(avgCompletionTime / (1000 * 60 * 60 * 24)), // Convert to days
    avgUserRating: ratingStats._avg.rating || 0,
    totalRatedTasks: ratingStats._count.rating || 0,
  };
}; 