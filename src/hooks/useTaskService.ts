import { useInjection } from '../Provider';
import { TYPES } from '../types';
import { ITaskService, Task } from '../types';
import { useState, useEffect } from 'react';

export const useTaskService = () => {
    const taskService = useInjection<ITaskService>(TYPES.TaskService);
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        setTasks(taskService.getTasks());
    }, [taskService]);

    const addTask = (title: string) => {
        taskService.addTask(title);
        setTasks(taskService.getTasks());
    };

    const toggleTask = (id: string) => {
        taskService.toggleTask(id);
        setTasks(taskService.getTasks());
    };

    const deleteTask = (id: string) => {
        taskService.deleteTask(id);
        setTasks(taskService.getTasks());
    };

    const updateTask = (id: string, title: string) => {
        taskService.updateTask(id, title);
        setTasks(taskService.getTasks());
    };

    return {
        tasks,
        addTask,
        toggleTask,
        deleteTask,
        updateTask
    };
}; 