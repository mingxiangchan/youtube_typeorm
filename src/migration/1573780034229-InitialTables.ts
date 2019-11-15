import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialTables1573780034229 implements MigrationInterface {
    name = 'InitialTables1573780034229'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "playlists" ("id" int NOT NULL IDENTITY(1,1), "title" nvarchar(255) NOT NULL, CONSTRAINT "PK_a4597f4189a75d20507f3f7ef0d" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "uploaders" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, CONSTRAINT "PK_3573b8eee17ceaf782a58f62524" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "videos" ("id" int NOT NULL IDENTITY(1,1), "title" nvarchar(255) NOT NULL, "length" int NOT NULL, "num_upvotes" int NOT NULL, "num_downvotes" int NOT NULL, "uploader_id" int, "playlist_id" int, CONSTRAINT "PK_e4c86c0cf95aff16e9fb8220f6b" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "videos" ADD CONSTRAINT "FK_63feefb458131eae468bb830d2c" FOREIGN KEY ("uploader_id") REFERENCES "uploaders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "videos" ADD CONSTRAINT "FK_1cdd03844a677efe5550486ce52" FOREIGN KEY ("playlist_id") REFERENCES "playlists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "videos" DROP CONSTRAINT "FK_1cdd03844a677efe5550486ce52"`, undefined);
        await queryRunner.query(`ALTER TABLE "videos" DROP CONSTRAINT "FK_63feefb458131eae468bb830d2c"`, undefined);
        await queryRunner.query(`DROP TABLE "videos"`, undefined);
        await queryRunner.query(`DROP TABLE "uploaders"`, undefined);
        await queryRunner.query(`DROP TABLE "playlists"`, undefined);
    }

}
