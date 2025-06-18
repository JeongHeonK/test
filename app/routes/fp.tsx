import type { Route } from './+types/fp';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'fp', name: 'description', content: 'fp 연습' }];
}

export default function Home() {
	return <div>FP</div>;
}
