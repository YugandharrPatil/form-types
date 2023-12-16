"use server";

import { db } from "@/lib/db";
import { tasks } from "@/lib/db/schema";

export default async function addEntry(data: any) {
	// database call
	try {
		await db.insert(tasks).values(data);
		console.log("Successfully added to database!");
	} catch (err) {
		console.log(err);
	}
}
