"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function TaskDetail() {
    const { id } = useParams();
    const router = useRouter();
    const [task, setTask] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch task");
                return res.json();
            })
            .then((data) => {
                setTask({ ...data, priority: ["High", "Medium", "Low"][data.id % 3] });
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching task:", err);
                setError(true);
                setLoading(false);
            });
    }, [id]);

    const handleCopy = () => {
        navigator.clipboard.writeText(task.title);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (loading) return <p className="p-6">Loading...</p>;
    if (error) return <p className="p-6 text-red-500">Failed to load task. Please try again.</p>;
    if (!task) return <p className="p-6">Task not found.</p>;

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold">{task.title}</h1>
            <p>Status: <span className={task.completed ? "text-green-500" : "text-red-500"}>
                {task.completed ? "Completed ✅" : "Pending ⏳"}
            </span></p>
            <p>Priority: <span className="font-semibold">{task.priority}</span></p>

            <Image
                src={task.completed ? "/check.png" : "/clock.png"}
                // src="https://source.unsplash.com/300x200/?task"
                width={300} height={200}
                alt="Task image"
                className="mt-4 rounded-lg"
            />

            <div className="mt-4 flex items-center space-x-4 relative">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={handleCopy}
                >
                    Copy Task Title
                </button>
                {copied && <span className="text-green-700 absolute bottom-12">Copied!</span>} 

                <button
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    onClick={() => router.push("/")}
                >
                    Back to Tasks
                </button>
            </div>
        </main>
    );
}
