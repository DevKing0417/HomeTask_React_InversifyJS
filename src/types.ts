export const TYPES = {
    TaskService: Symbol.for('TaskService')
};

export interface Task {
    id: string;
    title: string;
    completed: boolean;
}

export interface ITaskService {
    getTasks(): Task[];
    addTask(title: string): void;
    toggleTask(id: string): void;
    deleteTask(id: string): void;
    updateTask(id: string, title: string): void;
} 