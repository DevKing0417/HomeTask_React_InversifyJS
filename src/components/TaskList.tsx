import React, { useState } from 'react';
import { Task } from '../types';

interface TaskListProps {
    tasks: Task[];
    onToggleTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
    onUpdateTask: (id: string, title: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ 
    tasks, 
    onToggleTask, 
    onDeleteTask,
    onUpdateTask 
}) => {
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editTitle, setEditTitle] = useState('');

    const handleEdit = (task: Task) => {
        setEditingId(task.id);
        setEditTitle(task.title);
    };

    const handleSave = (id: string) => {
        onUpdateTask(id, editTitle);
        setEditingId(null);
    };

    return (
        <ul className="task-list">
            {tasks.map(task => (
                <li key={task.id} className="task-item">
                    <div className="task-content">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggleTask(task.id)}
                        />
                        {editingId === task.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    className="edit-input"
                                />
                                <button onClick={() => handleSave(task.id)}>Save</button>
                                <button onClick={() => setEditingId(null)}>Cancel</button>
                            </>
                        ) : (
                            <span className={task.completed ? 'completed' : ''}>
                                {task.title}
                            </span>
                        )}
                    </div>
                    {editingId !== task.id && (
                        <div className="task-actions">
                            <button 
                                className="edit-button" 
                                onClick={() => handleEdit(task)}
                                disabled={task.completed}
                            >
                                Edit
                            </button>
                            <button 
                                className="delete-button" 
                                onClick={() => onDeleteTask(task.id)}
                                disabled={task.completed}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}; 