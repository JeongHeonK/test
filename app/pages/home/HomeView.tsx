export default function HomeView() {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<header className="flex flex-col items-center gap-9">
					<h1>그림판</h1>
				</header>
				<div className="max-w-[300px] w-full space-y-6 px-4">
					<p className="text-center">연습</p>
				</div>
			</div>
		</main>
	);
}
