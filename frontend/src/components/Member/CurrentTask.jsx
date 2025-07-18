import { motion } from "framer-motion";

const CurrentTask = ({ task }) => {
    return (
        <motion.div className="bg-[#1f2a38] border border-teal-400 rounded-2xl p-8 mt-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold text-teal-400 mb-4">Current Task</h2>
            {task ? (
                <div>
                    <p><span className="font-semibold">Title:</span> {task.title}</p>
                    <p>
                        <span className="font-semibold">Status:</span>
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
