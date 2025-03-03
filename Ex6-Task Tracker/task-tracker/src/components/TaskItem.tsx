import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaCheckSquare } from "react-icons/fa";


export default function TaskItem({ task }: { task: any }) {
    return (
        <li className="flex items-center gap-4 p-4 border rounded-lg">
            {/* {task.completed ? < FaCheckSquare /> : <FaRegClock />} */}
            <Image
                src={task.completed ? "/check.png" : "/clock.png"}
                width={20}
                height={20}
                alt={task.completed ? "Completed" : "Pending"}
            />
            <Link href={`/task/${task.id}`} className="text-lg hover:underline">
                {task.title} - <span className={task.completed ? "text-green-500" : "text-red-500"}>
                    {task.completed ? "Completed" : "Pending"}
                </span>
            </Link>
        </li>
    );
}
