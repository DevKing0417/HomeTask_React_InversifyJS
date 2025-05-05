import { injectable } from 'inversify';
import { ITaskService, Task } from '../types';

@injectable()
export class TaskService implements ITaskService {
    private tasks: Task[] = [];

    getTasks(): Task[] {
        return [...this.tasks];
    }

    addTask(title: string): void {
        const newTask: Task = {
            id: Date.now().toString(),
            title,
            completed: false
        };
        this.tasks.push(newTask);
    }

    toggleTask(id: string): void {
        this.tasks = this.tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        );
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTask(id: string, title: string): void {
        this.tasks = this.tasks.map(task => 
            task.id === id ? { ...task, title } : task
        );
    }
} 