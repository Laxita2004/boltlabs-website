import { prisma } from '../lib/prisma.js';

export const fetchCurrentTasks = async (memberId) => {
  const tasks = await prisma.memberService.findMany({
    where: {
      member_id: memberId,
      status: { in: ['ASSIGNED', 'IN_PROGRESS'] },
    },
    include: {
      service: true,
    },
    orderBy: {
      service: {
        idea_date: 'asc',
      },
    },
  });

  if (!tasks.length) return null;

  const currentTask = tasks[0];
  return {
    title: currentTask.service.service,
    status: currentTask.status
  };
};

export const fetchTaskHistory = async (memberId, cursor, limit = 10) => {
  const where = {
    member_id: memberId,
    status: { in: ['COMPLETED', 'REJECTED'] },
  };

  const tasks = await prisma.memberService.findMany({
    where,
    include: {
      service: true,
    },
    orderBy: {
      completedAt: 'desc',
    },
    take: limit,
    ...(cursor && { skip: 1, cursor: { member_id_service_id: cursor } }),
  });

  const formatted = tasks.map(t => ({
    title: t.service.service,
    status: t.status,
    date: t.completedAt || t.service.idea_date
  }));

  let nextCursor = null;
  if (tasks.length === limit) {
    const last = tasks[tasks.length - 1];
    nextCursor = { member_id: last.member_id, service_id: last.service_id };
  }

  return { tasks: formatted, nextCursor };
};

export const fetchTaskStats = async (memberId, dateRange = 30) => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - dateRange);

  const statusCounts = await prisma.memberService.groupBy({
    by: ['status'],
    where: {
      member_id: memberId,
      completedAt: { gte: startDate },
    },
    _count: { status: true },
  });

  const completed = statusCounts.find(sc => sc.status === 'COMPLETED')?._count.status || 0;
  const total = statusCounts.reduce((sum, sc) => sum + sc._count.status, 0);
  const pending = total - completed;

  const mostFrequent = statusCounts.sort((a, b) => b._count.status - a._count.status)[0]?.status || "N/A";

  return {
    total,
    completed,
    pending,
    currentStatus: mostFrequent
  };
};
