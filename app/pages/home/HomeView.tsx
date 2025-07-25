import { useEffect, useRef } from 'react';

export default function HomeView() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctx.fillStyle = '#fff';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}, []);

	return (
		<div className="flex-1 flex flex-col items-center gap-16 pt-10">
			<header className="flex flex-col items-center gap-9">
				<h1>그림판</h1>
			</header>
			<canvas ref={canvasRef} className="border w-96 h-64"></canvas>
		</div>
	);
}
