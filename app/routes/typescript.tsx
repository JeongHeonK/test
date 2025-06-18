import TypeScriptView from '~/pages/typescript';
import type { Route } from './+types/typescript';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'typescript', name: 'description', content: 'typescript 연습' },
	];
}

export default function TypeScript() {
	return <TypeScriptView />;
}
