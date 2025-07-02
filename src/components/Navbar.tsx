import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();

	const navItems = [
		{ path: "/", label: "Work" },
		{ path: "/about", label: "About" },
		{ path: "/studio", label: "Studio" },
		{ path: "/contact", label: "Contact" },
	];

	return (
		<nav>
			<Link to="/">Clément Rozé</Link>

			<ul>
				{navItems.map(({ path, label }) => (
					<li
						key={path}
						className={location.pathname === path ? "selected" : ""}
					>
						<Link to={path}>{label}</Link>
					</li>
				))}
			</ul>

			<span className="indicator">✦</span>
		</nav>
	);
}
