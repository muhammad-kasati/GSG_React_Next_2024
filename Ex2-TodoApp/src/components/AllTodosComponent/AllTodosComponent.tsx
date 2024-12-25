import TodoItemComponent from '../TodoItemComponent/TodoItemComponent';
import './allTodosComponent.css';

interface Todo {
    id: number;
    title: string;
    isUrgent: boolean;
    isCompleted: boolean;
}

interface Props {
    todos: Todo[];
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

const AllTodosComponent = ({ todos, onToggleComplete, onDelete }: Props) => (
    <div className="all-todos">
        {todos.map((todo) => (
            <TodoItemComponent
                key={todo.id}
                {...todo}
                onToggleComplete={onToggleComplete}
                onDelete={onDelete}
            />
        ))}
    </div>
);

export default AllTodosComponent;
