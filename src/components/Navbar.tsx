import { Link, useLocation } from "react-router-dom";
import { useRef, useLayoutEffect, useState } from "react";

export default function Navbar() {
	const location = useLocation();
	const navRef = useRef<HTMLUListElement>(null);
	const indicatorRef = useRef<HTMLSpanElement>(null);
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const [indicatorStyle, setIndicatorStyle] = useState<{
		left: number;
		opacity: number;
	}>(() => {
		// Get persisted position from localStorage
		const savedLeft = localStorage.getItem('navIndicatorLeft');
		return {
			left: savedLeft ? parseFloat(savedLeft) : 0,
			opacity: savedLeft ? 1 : 0,
		};
	});

	const navItems = [
		{ path: "/", label: "Work" },
		{ path: "/about", label: "About" },
		{ path: "/studio", label: "Studio" },
		{ path: "/contact", label: "Contact" },
	];

	useLayoutEffect(() => {
		if (!navRef.current || !indicatorRef.current) return;

		const activeIndex = navItems.findIndex(
			(item) => item.path === location.pathname,
		);
		if (activeIndex === -1) return;

		const activeLink = navRef.current.children[activeIndex] as HTMLLIElement;
		const navRect = navRef.current.getBoundingClientRect();
		const linkRect = activeLink.getBoundingClientRect();

		const leftPosition =
			linkRect.left - navRect.left + linkRect.width / 2 - 8; // 8px is half the indicator width

		// Save position to localStorage
		localStorage.setItem('navIndicatorLeft', leftPosition.toString());

		setIndicatorStyle({
			left: leftPosition,
			opacity: 1,
		});

		// After first calculation, allow transitions for subsequent changes
		if (isFirstLoad) {
			setIsFirstLoad(false);
		}
	}, [location.pathname]);

	return (
		<nav>
			<Link to="/">Clément Rozé</Link>

			<ul ref={navRef} className="nav-list">
				{navItems.map(({ path, label }) => (
					<li
						key={path}
						className={location.pathname === path ? "selected" : ""}
					>
						<Link to={path}>{label}</Link>
					</li>
				))}
				<span
					ref={indicatorRef}
					className="indicator"
					style={{
						left: `${indicatorStyle.left}px`,
						opacity: indicatorStyle.opacity,
						transition: isFirstLoad ? 'none' : 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
					}}
				>
					✦
				</span>
			</ul>
		</nav>
	);
}