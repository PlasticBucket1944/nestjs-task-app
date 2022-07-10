import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStauts } from './task-status.enum';
import { TaskRepository } from './task.repository';


@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.createTask(createTaskDto);
  }

  async update(id: string, status: TaskStauts): Promise<Task> {
    const task = await this.findById(id);
    task.status = status;
    task.updatedAt = new Date().toISOString();
    await this.taskRepository.save(task);
    return task;
  }

  async delete(id: string): Promise<void> {
    const item = await this.findById(id);
    await this.taskRepository.delete({ id });
  }
}
