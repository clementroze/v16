import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function Navbar() {
	const location = useLocation();
	const navigate = useNavigate();
	const navRef = useRef<HTMLUListElement>(null);
	const indicatorRef = useRef<HTMLSpanElement>(null);
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const [scrolledPastHero, setScrolledPastHero] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isExiting, setIsExiting] = useState(false);
	const [clickedIndex, setClickedIndex] = useState<number | null>(null);
	const [indicatorStyle, setIndicatorStyle] = useState<{
		left: number;
		top?: number;
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

		// Check if we're in mobile view
		const isMobile = window.innerWidth <= 600;

		let leftPosition, topPosition;
		if (isMobile && isMenuOpen) {
			// For mobile, position indicator 16px from left and vertically centered with text
			leftPosition = 16;

			// Get the actual indicator element to measure its real dimensions
			const indicator = indicatorRef.current;
			let starHeight = 40; // fallback
			if (indicator) {
				const indicatorRect = indicator.getBoundingClientRect();
				starHeight = indicatorRect.height;
			}

			// Position star so its center aligns with the text center
			topPosition =
				linkRect.top - navRect.top + (linkRect.height - starHeight) / 2;
		} else {
			// Desktop positioning
			leftPosition = linkRect.left - navRect.left + linkRect.width / 2 - 8;
			topPosition = undefined;
		}

		const rotations = [0, 90, 180, 270];
		const rotation = rotations[activeIndex] || 0;

		localStorage.setItem("navIndicatorLeft", leftPosition.toString());
		localStorage.setItem("navIndicatorRotation", rotation.toString());

		setIndicatorStyle({
			left: leftPosition,
			top: topPosition,
			opacity: 1,
			rotation: rotation,
		});

		if (isFirstLoad) {
			setIsFirstLoad(false);
		}
	}, [location.pathname, isMenuOpen]);

	useEffect(() => {
		if (location.pathname !== "/about") {
			setScrolledPastHero(false);
			return;
		}

		const handleScroll = () => {
			const heroHeight = 500;
			setScrolledPastHero(window.scrollY > heroHeight);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [location.pathname]);

	// Close menu when route changes
	useEffect(() => {
		setIsMenuOpen(false);
		setIsExiting(false);
		setClickedIndex(null);
	}, [location.pathname]);

	const toggleMenu = () => {
		if (isMenuOpen) {
			// If closing the menu, trigger exit animation
			setIsExiting(true);

			// Wait for the exit animation to complete before actually closing
			setTimeout(() => {
				setIsMenuOpen(false);
				setIsExiting(false);
			}, 300); // Match the animation duration
		} else {
			setIsMenuOpen(true);
		}
	};

	return (
		<nav
			className={
				location.pathname === "/about" && scrolledPastHero
					? "text-dark"
					: ""
			}
		>
			<div className="inner">
				<Link to="/" className="name">
					Clément Rozé
				</Link>

				<button
					className={`hamburger ${isMenuOpen ? "open" : ""}`}
					onClick={toggleMenu}
					aria-label="Toggle navigation menu"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<ul
					ref={navRef}
					className={`nav-list ${isMenuOpen ? "mobile-open" : ""} ${isExiting ? "mobile-exiting" : ""}`}
				>
					{navItems.map(({ path, label }) => (
						<li
							key={path}
							className={location.pathname === path ? "selected" : ""}
							aria-current={location.pathname === path}
						>
							<Link
								to={path}
								onMouseEnter={() => {
									// Preload the route component
									if (path === "/about") {
										import("../About");
									} else if (path === "/studio") {
										import("../Studio");
									} else if (path === "/contact") {
										import("../Contact");
									} else if (path === "/") {
										import("../Home");
									}
								}}
								onClick={(e) => {
									if (isMenuOpen && window.innerWidth <= 600) {
										e.preventDefault();

										const clickedIdx = navItems.findIndex(
											(item) => item.path === path,
										);
										setClickedIndex(clickedIdx);

										setIsExiting(true);

										// Start navigation immediately in background
										setTimeout(() => {
											navigate(path);
										}, 50);
									}
								}}
							>
								{label}
							</Link>
						</li>
					))}
					<span
						aria-hidden
						ref={indicatorRef}
						className="indicator"
						style={{
							left: `${indicatorStyle.left}px`,
							top: indicatorStyle.top
								? `${indicatorStyle.top}px`
								: undefined,
							opacity: indicatorStyle.opacity,
							transform: `rotate(${indicatorStyle.rotation}deg)`,
							transition: isFirstLoad
								? "none"
								: "left var(--nav-selector-transition) cubic-bezier(0.4, 0, 0.2, 1), top var(--nav-selector-transition) cubic-bezier(0.4, 0, 0.2, 1), opacity var(--nav-selector-transition) ease, transform var(--nav-selector-transition) cubic-bezier(0.4, 0, 0.2, 1)",
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
