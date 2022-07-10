import {MigrationInterface, QueryRunner} from "typeorm";

export class EditTask1657422821253 implements MigrationInterface {
    name = 'EditTask1657422821253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "stasus" TO "status"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "status" TO "stasus"`);
    }

}
