import { NavLink } from 'react-router';
import { cn } from '~/utils/cn';

export default function Navbar() {
	return (
		<nav className="flex gap-4 border-b px-2 py-5">
			<NavLink
				to="/"
				className={({ isActive }) =>
					cn(' w-[100px] text-center', isActive && 'font-bold text-blue-800')
				}
				end
			>
				Home
			</NavLink>
			<NavLink
				to="/fp"
				className={({ isActive }) =>
					cn(' w-[100px] text-center', isActive && 'font-bold text-blue-800')
				}
				end
			>
				FP
			</NavLink>
			<NavLink
				to="/typescript"
				className={({ isActive }) =>
					cn(' w-[100px] text-center', isActive && 'font-bold text-blue-800')
				}
				end
			>
				TypeScript
			</NavLink>
			<NavLink
				to="/comments"
				className={({ isActive }) =>
					cn(' w-[100px] text-center', isActive && 'font-bold text-blue-800')
				}
				end
			>
				Comments
			</NavLink>
		</nav>
	);
}
