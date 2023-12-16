"use client";

import { FormEvent } from "react";

export default function ClientUncontrolledRouteHandlersPage() {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		const formData = new FormData(form);
		const formDataObject = Object.fromEntries(formData);

		console.log("New Submit:", formDataObject);

		const res = await fetch("/api/tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formDataObject),
		});
		const data = await res.json();
		console.log(data);
		form.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="task">Task</label>
			<input className="ms-2 border-black border-2 rounded" type="text" id="task" name="task" autoFocus />

			<br />

			<label htmlFor="day">Day</label>
			<input className="ms-2 border-black border-2 rounded" type="text" id="day" name="day" />
			<br />
			<button className="btn">Submit</button>
		</form>
	);
}
