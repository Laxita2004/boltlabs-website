// Controller for Team Member Panel APIs
import * as teamMemberService from '../services/teamMemberService.js';

export const getCurrentTasks = async (req, res, next) => {
  try {
    const memberId = req.user.member_id;
    const tasks = await teamMemberService.fetchCurrentTasks(memberId);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getTaskHistory = async (req, res, next) => {
  try {
    const memberId = req.user.member_id;
    const { cursor, limit } = req.query;
    const result = await teamMemberService.fetchTaskHistory(memberId, cursor, parseInt(limit));
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getTaskStats = async (req, res, next) => {
  try {
    const memberId = req.user.member_id;
    const { dateRange } = req.query;
    const stats = await teamMemberService.fetchTaskStats(memberId, parseInt(dateRange));
    res.json(stats);
  } catch (err) {
    next(err);
  }
}; 