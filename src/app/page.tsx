import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<h1 className="text-center text-3xl font-bold pt-10">Form Types in React & Next</h1>
			<h2 className="text-center mt-3 font-semibold">Format: Component + Controlled/Uncontroled Inputs + API Call Fashion</h2>
			<div className="flex gap-4 w-fit mx-auto pt-5">
				<Link className="btn" href="client-controlled-routeHandlers">
					Client + Controlled + API Route Handlers
				</Link>
				<Link className="btn" href="client-uncontrolled-routeHandlers">
					Client + Uncontrolled + API Route Handlers
				</Link>
				<Link className="btn" href="client-uncontrolled-serverActions">
					Client + Uncontrolled + Server Actions
				</Link>
				<Link className="btn" href="server-uncontrolled-serverActions">
					Server + Uncontrolled + Server Actions
				</Link>
				{/* <Link className="btn" href="clientServerActionsHookForm">
					Client Component + Server Actions + React Hook Form
				</Link> */}
			</div>
		</>
	);
}
