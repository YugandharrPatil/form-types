import { db } from "@/lib/db";
import { tasks } from "@/lib/db/schema";
import { NextResponse } from "next/server";

type FormData = {
	task: string;
	day?: string;
};

export async function POST(request: Request) {
	const data: FormData = await request.json();
	console.log("Data:", data);

	const { task, day } = data;
	console.log(task, day);

	try {
		await db.insert(tasks).values({ task: task, day: day });
		console.log("Successfully added to database!");
	} catch (err) {
		console.error("Error while inserting to DB: ", err);
	}

	return NextResponse.json({ task, day });
}
