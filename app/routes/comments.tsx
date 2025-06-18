import CommentsView from '~/pages/comments';
import type { Route } from './+types/comments';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'comments', name: 'description', content: '사용성 비교 기록' },
	];
}

export default function Comments() {
	return <CommentsView />;
}
