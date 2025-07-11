import React from "react";
import { motion } from "framer-motion";

const TaskStats = () => {

    // Dummy Data inside the file
    const stats = {
        total: 5,
        completed: 3,
        pending: 2
    };

    const currentTask = {
        status: "In Progress"  // or "Completed"
    };

    return (
        <motion.div
            className="bg-[#1f2a38] border border-teal-400 rounded-2xl p-8 mt-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-white"
            whileHover={{ scale: 1.03 }}
        >
            <h2 className="text-3xl font-bold text-teal-400 mb-4 tracking-wide">
                Task Stats
            </h2>

            {stats ? (
                <div className="space-y-2 text-gray-300">
                    <p>
                        <span className="font-semibold">Total Tasks:</span> {stats.total}
                    </p>
                    <p>
                        <span className="font-semibold">Completed:</span>
                        <span className="text-green-400 ml-1">{stats.completed}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Pending:</span>
                        <span className="text-yellow-400 ml-1">{stats.pending}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Current Task Status:</span>
                        <span className={`ml-2 font-bold ${currentTask?.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                            {currentTask?.status || "N/A"}
                        </span>
                    </p>
                </div>
            ) : (
                <p className="text-gray-400">Loading stats...</p>
            )}
        </motion.div>
    );
};

export default TaskStats;
