import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTask1657379170515 implements MigrationInterface {
    name = 'CreateTask1657379170515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "stasus" integer NOT NULL, "createdAt" character varying NOT NULL, "updatedAt" character varying NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id")); COMMENT ON COLUMN "task"."id" IS 'ID'; COMMENT ON COLUMN "task"."name" IS 'タスク名'; COMMENT ON COLUMN "task"."stasus" IS 'タスク状態 1:未実行、2:実行中、3:完了'; COMMENT ON COLUMN "task"."createdAt" IS '更新ログ項目：作成日'; COMMENT ON COLUMN "task"."updatedAt" IS '更新ログ項目：更新日'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}
