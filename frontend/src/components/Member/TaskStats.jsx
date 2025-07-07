import React, { useEffect, useState } from "react";
import { getTaskStats } from "../../services/memberApi.js";
import { motion } from "framer-motion";

const TaskStats = () => {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        getTaskStats().then(setStats).catch(console.error);
    }, []);

    return (
        <motion.div className="bg-[#1f2a38] border border-teal-400 rounded-2xl p-8 mt-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold text-teal-400 mb-4">Task Stats</h2>
            {stats ? (
                <div className="text-gray-300 space-y-2">
                    <p><span className="font-semibold">Total Tasks:</span> {stats.total}</p>
                    <p><span className="font-semibold">Completed:</span> <span className="text-green-400">{stats.completed}</span></p>
                    <p><span className="font-semibold">Pending:</span> <span className="text-yellow-400">{stats.pending}</span></p>
                    <p>
                        <span className="font-semibold">Current Task Status:</span>
                        <span className={`ml-2 font-bold ${stats.currentStatus === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                            {stats.currentStatus || "N/A"}
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
