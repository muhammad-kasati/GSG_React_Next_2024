import './todoItemComponent.css';

interface Props {
    id: number;
    title: string;
    isUrgent: boolean;
    isCompleted: boolean;
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItemComponent = ({ id, title, isUrgent, isCompleted, onToggleComplete, onDelete }: Props) => (
    <div className={`todo-item ${isUrgent ? 'urgent' : ''}`}>
        <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => onToggleComplete(id)}
        />
        <span className={isCompleted ? 'completed' : ''}>{title}</span>
        <button onClick={() => onDelete(id)}>Delete</button>
    </div>
);

export default TodoItemComponent;
