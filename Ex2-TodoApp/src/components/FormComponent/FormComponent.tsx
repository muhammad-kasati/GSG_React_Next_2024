import React, { useState } from 'react';
import './formComponent.css';

interface Props {
    onAddTodo: (title: string, isUrgent: boolean) => void;
}

const FormComponent = ({ onAddTodo }: Props) => {
    const [title, setTitle] = useState('');
    const [isUrgent, setIsUrgent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return alert('Task title cannot be empty');
        onAddTodo(title, isUrgent);
        setTitle('');
        setIsUrgent(false);
    };

    return (
        <form className="form-component" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
            />
            <label>
                <input
                    type="checkbox"
                    checked={isUrgent}
                    onChange={(e) => setIsUrgent(e.target.checked)}
                />
                Mark as Urgent
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default FormComponent;
