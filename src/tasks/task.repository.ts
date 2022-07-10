import { Task } from "../entities/task.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStauts } from "./task-status.enum";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { name } = createTaskDto;
    const task = this.create({
      name,
      status: TaskStauts.NOT_EXECUTED,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    await this.save(task);

    return task;
  }
}