import { index, type RouteConfig, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('fp', 'routes/fp.tsx'),
	route('typescript', 'routes/typescript.tsx'),
	route('comments', 'routes/comments.tsx'),
] satisfies RouteConfig;
