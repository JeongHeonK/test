import HomeView from '../pages/home';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: '그림판' },
		{ name: 'description', content: '그림판 및 기타 연습' },
	];
}

export default function Home() {
	return <HomeView />;
}
