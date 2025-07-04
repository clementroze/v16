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
		rotation: number;
	}>(() => {
		const savedLeft = localStorage.getItem("navIndicatorLeft");
		const savedRotation = localStorage.getItem("navIndicatorRotation");
		return {
			left: savedLeft ? parseFloat(savedLeft) : 0,
			opacity: savedLeft ? 1 : 0,
			rotation: savedRotation ? parseFloat(savedRotation) : 0,
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
			linkRect.left - navRect.left + linkRect.width / 2 - 8;

		const rotations = [0, 90, 180, 270];
		const rotation = rotations[activeIndex] || 0;

		localStorage.setItem("navIndicatorLeft", leftPosition.toString());
		localStorage.setItem("navIndicatorRotation", rotation.toString());

		setIndicatorStyle({
			left: leftPosition,
			opacity: 1,
			rotation: rotation,
		});

		if (isFirstLoad) {
			setIsFirstLoad(false);
		}
	}, [location.pathname]);

	return (
		<nav>
			<div className="inner">
				<Link to="/">Clément Rozé</Link>

				<ul ref={navRef} className="nav-list">
					{navItems.map(({ path, label }) => (
						<li
							key={path}
							className={location.pathname === path ? "selected" : ""}
							aria-current={location.pathname === path}
						>
							<Link to={path}>{label}</Link>
						</li>
					))}
					<span
						aria-hidden
						ref={indicatorRef}
						className="indicator"
						style={{
							left: `${indicatorStyle.left}px`,
							opacity: indicatorStyle.opacity,
							transform: `rotate(${indicatorStyle.rotation}deg)`,
							transition: isFirstLoad
								? "none"
								: "left var(--nav-selector-transition) cubic-bezier(0.4, 0, 0.2, 1), opacity var(--nav-selector-transition) ease, transform var(--nav-selector-transition) cubic-bezier(0.4, 0, 0.2, 1)",
						}}
					>
						✦
					</span>
				</ul>
			</div>

			<div className="gradient-blur">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}
