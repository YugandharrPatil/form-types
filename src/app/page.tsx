import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<h1 className="text-center text-3xl font-semibold pt-10">Form Types in React & Next</h1>
			<div className="flex gap-4 w-fit mx-auto pt-5">
				<Link className="btn" href="clientControlledAPIRoutes">
					Client Component + Controlled Inputs + API Route Handlers
				</Link>
				<Link className="btn" href="clientUncontrolledAPIRoutes">
					Client Component + UnControlled Inputs + API Route Handlers
				</Link>
				<Link className="btn" href="serverServerActions">
					Server Component + Server Actions
				</Link>
				<Link className="btn" href="serverServerActions">
					Server Component + Server Actions + React Hook Form
				</Link>
				<Link className="btn" href="clientServerActionsHookForm">
					Client Component + Server Actions + React Hook Form
				</Link>
			</div>
		</>
	);
}
