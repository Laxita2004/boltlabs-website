import React from "react";

import { motion } from "framer-motion";

const CurrentTask = ({ task }) => {
    return (
        <motion.div
            className="bg-[#1f2a38] border border-teal-400 rounded-2xl p-8 mt-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-white"
            whileHover={{ scale: 1.03 }}
        >
            <h2 className="text-3xl font-bold text-teal-400 mb-4 tracking-wide">
                Current Task
            </h2>

            {task ? (
                <div className="space-y-2">
                    <p>
                        <span className="font-semibold text-gray-300">Title:</span> {task.title}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-300">Status:</span>
                        <span className={`ml-2 font-bold ${task.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                            {task.status}
                        </span>
                    </p>
                </div>
            ) : (
                <p className="text-gray-400">No active task assigned.</p>
            )}
        </motion.div>

    );
};

export default CurrentTask;

