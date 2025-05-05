import { Container } from 'inversify';
import { TYPES } from './types';
import { TaskService } from './services/TaskService';
import { ITaskService } from './types';

const container = new Container();
container.bind<ITaskService>(TYPES.TaskService).to(TaskService).inSingletonScope();

export { container }; 