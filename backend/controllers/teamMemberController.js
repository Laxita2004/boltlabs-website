import * as teamMemberService from '../services/teamMemberService.js';

export const getCurrentTasks = async (req, res, next) => {
  try {
    const data = await teamMemberService.fetchCurrentTasks(req.user.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getTaskHistory = async (req, res, next) => {
  try {
    const { cursor, limit } = req.query;
    const data = await teamMemberService.fetchTaskHistory(req.user.id, cursor, parseInt(limit));
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getTaskStats = async (req, res, next) => {
  try {
    const { dateRange } = req.query;
    const data = await teamMemberService.fetchTaskStats(req.user.id, parseInt(dateRange));
    res.json(data);
  } catch (err) {
    next(err);
  }
};
