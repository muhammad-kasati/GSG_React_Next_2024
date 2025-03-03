import TaskItem from "@/components/TaskItem";

async function fetchTasks() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}

export default async function Home() {
  const tasks = await fetchTasks();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Task Tracker</h1>
      <ul className="mt-4 space-y-4">
        {tasks.map((task: any) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
}
