import { useEffect, useState } from 'react';
import { getCurrentTask, getTaskHistory, getTaskStats } from '../services/memberApi';
import CurrentTask from '../components/Member/CurrentTask';
import TaskHistory from '../components/Member/TaskHistory';
import TaskStats from '../components/Member/TaskStats';

const MemberPage = () => {
    const [task, setTask] = useState(null);
    const [history, setHistory] = useState([]);
    const [stats, setStats] = useState({});
    const token = localStorage.getItem('token');  // Assuming token stored here

    useEffect(() => {
        getCurrentTask(token).then(res => setTask(res.data)).catch(console.error);
        getTaskHistory(token).then(res => setHistory(res.data.tasks)).catch(console.error);
        getTaskStats(token).then(res => setStats(res.data)).catch(console.error);
    }, []);

    return (
        <div className="min-h-screen bg-[#141e28] px-8 py-10 text-white">
            <div className="bg-[#1f2d3a] p-6 rounded-2xl shadow-lg mb-8">
                <h1 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                    Welcome back, <span className="text-white">{'Member'}!</span>
                </h1>
                <p className="text-lg text-gray-300">
                    Let’s check your tasks and progress for today. Stay consistent!
                </p>
            </div>

            <div className="grid gap-6">
                <CurrentTask task={task} />
                <TaskStats stats={stats} />
                <TaskHistory history={history} />
            </div>
        </div>


    );
};

export default MemberPage;
