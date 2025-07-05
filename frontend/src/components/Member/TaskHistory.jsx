import React from "react";
import { motion } from "framer-motion";

const TaskHistory = () => {

    // Dummy Data inside the file
    const history = [
        {
            title: "Setup Backend API",
            status: "Completed",
            date: "2024-07-01"
        },
        {
            title: "Database Schema Design",
            status: "Completed",
            date: "2024-07-02"
        },
        {
            title: "Initial Frontend Layout",
            status: "In Progress",
            date: "2024-07-03"
        }
    ];

    return (
        <motion.div
            className="bg-[#1f2a38] border border-teal-400 rounded-2xl p-8 shadow-xl hover:shadow-2xl mt-8 transition-all duration-300 text-white"
            whileHover={{ scale: 1.03 }}
        >
            <h2 className="text-3xl font-bold text-teal-400 mb-4 tracking-wide">
                Task History
            </h2>

            {history.length > 0 ? (
                <ul className="space-y-4">
                    {history.map((task, index) => (
                        <li key={index} className="border-b border-teal-400/20 pb-3">
                            <p className="font-semibold text-white">{task.title}</p>
                            <p className="text-gray-300">
                                Status:
                                <span className={`ml-2 font-bold ${task.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                                    {task.status}
                                </span>
                                <span className="ml-4 text-sm text-gray-400">
                                    {new Date(task.date).toLocaleDateString()}
                                </span>
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-400">No previous tasks.</p>
            )}
        </motion.div>
    );
};

export default TaskHistory;
