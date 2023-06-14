import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1686783433084 implements MigrationInterface {
    name = 'FirstMigration1686783433084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "weapon" ("id" SERIAL NOT NULL, "weapon_name" character varying(45) NOT NULL, "price" numeric(7,2) NOT NULL DEFAULT '0', "range" character varying(45) NOT NULL, "availability" boolean NOT NULL DEFAULT true, "weight" numeric(3,2) NOT NULL DEFAULT '0', "categoryId" integer, CONSTRAINT "UQ_b018545f5091250d70b8198fa78" UNIQUE ("weapon_name"), CONSTRAINT "UQ_f304543c7f136f0fee55cede4af" UNIQUE ("range"), CONSTRAINT "PK_41fe726bde6432339c1d4595d29" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "category_name" character varying(45) NOT NULL, CONSTRAINT "UQ_9359e3b1d5e90d7a0fbe3b28077" UNIQUE ("category_name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "weapon" ADD CONSTRAINT "FK_c2c45071e6311a5e6bd12121d7d" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weapon" DROP CONSTRAINT "FK_c2c45071e6311a5e6bd12121d7d"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "weapon"`);
    }

}
