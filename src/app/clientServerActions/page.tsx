"use client";

import addEntry from "../actions/action";

const handleSubmit = async (e: any) => {
	e.preventDefault();

	const form = e.currentTarget;
	const formData = new FormData(form);
	const formDataObject = Object.fromEntries(formData);

	console.log("New Submit:", formDataObject);

	await addEntry(formDataObject);
};

export default function ReactServerActionsPage() {
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
