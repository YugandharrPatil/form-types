"use client";

import { FormEvent, useState } from "react";

export default function ReactRouteHandlersPage() {
	const [task, setTask] = useState("");
	const [day, setDay] = useState("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("New Submit: ", task, day);

		// send data to API route
		const res = await fetch("http://localhost:3000/api/tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				task,
				day,
			}),
		});

		const data = await res.json();
		console.log(data);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="task">Task</label>
				<input
					className="ms-2 border-black border-2 rounded"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					type="text"
					id="task"
					name="task"
					autoFocus
				/>
				<br />
				<label htmlFor="day">Day</label>
				<input className="ms-2 border-black border-2 rounded" value={day} onChange={(e) => setDay(e.target.value)} type="text" id="day" name="day" />
				<br />
				<button className="btn">Submit</button>
			</form>
		</>
	);
}
