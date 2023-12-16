import { db } from "@/lib/db";
import { tasks } from "@/lib/db/schema";

const handleSubmit = async (data: FormData) => {
	"use server";

	const task = data.get("task")?.valueOf();
	if (typeof task !== "string" || task.length === 0) {
		throw new Error("Please enter a valid name");
	}

	const day = data.get("day")?.valueOf();
	if (typeof day !== "string" || day.length === 0) {
		throw new Error("Please enter a valid name");
	}

	// database call
	try {
		await db.insert(tasks).values({ task: task, day: day });
		console.log("Successfully added to database!");
	} catch (err) {
		console.log(err);
	}
};

export default function NextServerActionsPage() {
	return (
		<form action={handleSubmit}>
			<label htmlFor="task">Task</label>
			<input className="ms-2 border-black border-2 rounded" type="text" id="task" name="task" autoFocus />

			<br />

			<label htmlFor="day">Day</label>
			<input className="ms-2 border-black border-2 rounded" type="text" id="day" name="day" />
			<br />
			<button className="btn" type="submit">
				Submit
			</button>
		</form>
	);
}
