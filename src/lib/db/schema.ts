import { mysqlTable, serial, text } from "drizzle-orm/mysql-core";

/**
 * This is a sample schema.
 * Replace this with your own schema and then run migrations.
 */

export const tasks = mysqlTable("tasks", {
	id: serial("id").primaryKey(),
	task: text("task"),
	day: text("day"),
});
