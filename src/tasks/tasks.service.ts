import { Injectable } from '@nestjs/common';
import { Task } from 'src/entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskRepository } from './task.repository';


@Injectable()
export class TasksService {
  constructor(private readonly taskREpository: TaskRepository) {}

  async findAll(): Promise<Task[]> {
    return await this.taskREpository.find();
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.taskREpository.createTask(createTaskDto);
  }
}
