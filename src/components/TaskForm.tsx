import React, { useState } from 'react';

interface TaskFormProps {
    onSubmit: (title: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onSubmit(title.trim());
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
                className="task-input"
            />
            <button type="submit" className="add-button">
                Add Task
            </button>
        </form>
    );
}; 