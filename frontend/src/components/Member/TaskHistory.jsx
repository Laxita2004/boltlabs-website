import { motion } from "framer-motion";

const TaskHistory = ({ history }) => {
    return (
        <motion.div className="bg-[#1f2a38] border border-teal-400 rounded-2xl p-8 mt-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold text-teal-400 mb-4">Task History</h2>
            {history && history.length ? (
                <ul>
                    {history.map((task, i) => (
                        <li key={i} className="border-b border-teal-400/20 pb-3 mb-3">
                            <p className="font-semibold">{task.title}</p>
                            <p>
                                Status:
                                <span className={`ml-2 font-bold ${task.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                                    {task.status}
                                </span>
                                <span className="ml-4 text-sm text-gray-400">{new Date(task.date).toLocaleDateString()}</span>
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
