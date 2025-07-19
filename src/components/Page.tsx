
import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type PageProps = {
	children: React.ReactNode;
	page?: "home" | "about" | "activities" | "studio" | "contact";
	heroText?: "light" | "dark";
};

const colorMap: Record<string, string> = {
	home: "var(--dark)",
	about: "var(--blue)",
	activities: "var(--red)",
	studio: "var(--green)",
	contact: "var(--yellow)",
};

const Page: React.FC<PageProps> = ({ children, page = "home", heroText }) => {
	useEffect(() => {
		const backgroundColor = colorMap[page];
		document.body.style.backgroundColor = backgroundColor;

		return () => {
			document.body.style.backgroundColor = "";
		};
	}, [page]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);

	// Clone children and inject page prop to Hero components
	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child) && child.type && 
			typeof child.type === 'function' && 
			child.type.name === 'Hero') {
			return React.cloneElement(child, { page, ...child.props });
		}
		return child;
	});

	return (
		<div>
			<a href="#main-content" className="skip-to-main">
				Skip to main content
			</a>
			<Navbar />
			<main id="main-content" tabIndex={-1} className={page}>
				{childrenWithProps}
			</main>
			<Footer page={page} />
		</div>
	);
};

export default Page;
