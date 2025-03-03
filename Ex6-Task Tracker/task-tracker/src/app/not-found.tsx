export default function NotFound() {
    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold">Task Not Found</h1>
            <p>The task you're looking for does not exist.</p>
            <a href="/" className="text-blue-500 hover:underline">Back to Tasks</a>
        </div>
    );
}
