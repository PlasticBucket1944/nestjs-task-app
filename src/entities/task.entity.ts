import { TaskStauts } from "../tasks/task-status.enum";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Task {
  @PrimaryGeneratedColumn('uuid', { comment: 'ID' })
  id:string;

  @Column({ comment: 'タスク名' })
  name: string;

  @Column({ comment: 'タスク状態 1:未実行、2:実行中、3:完了' })
  stasus: TaskStauts;

  @Column({ comment: '更新ログ項目：作成日' })
  createdAt: string;

  @Column({ comment: '更新ログ項目：更新日' })
  updatedAt: string;
}