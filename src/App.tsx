import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { useTaskService } from './hooks/useTaskService';
import './App.css';

function App() {
    const { tasks, addTask, toggleTask, deleteTask, updateTask } = useTaskService();

    return (
        <div className="app">
            <h1>Task Manager</h1>
            <TaskForm onSubmit={addTask} />
            <TaskList 
                tasks={tasks} 
                onToggleTask={toggleTask}
                onDeleteTask={deleteTask}
                onUpdateTask={updateTask}
            />
        </div>
    );
}

export default App; 