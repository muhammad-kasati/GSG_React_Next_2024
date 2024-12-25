import './todoDataComponent.css';

interface Props {
    createdTasks: number;
    completedTasks: number;
    urgentTasks: number;
}

const TodoDataComponent = ({ createdTasks, completedTasks, urgentTasks }: Props) => (
    <div className="todo-data">
        <div>Created tasks: {createdTasks}</div>
        <div>Completed tasks: {completedTasks}</div>
        <div>Urgent tasks: {urgentTasks}</div>
    </div>
);

export default TodoDataComponent;
