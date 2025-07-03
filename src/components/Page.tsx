import React, { useEffect, useState } from "react";
import { TextColorContext } from "../utilities/HeroTextColorContext";
import Navbar from "./Navbar";

type PageProps = {
	children: React.ReactNode;
	heroText?: "light" | "dark";
	page?: "home" | "about" | "studio" | "contact";
};

const colorMap: Record<string, string> = {
	home: "var(--dark)",
	about: "var(--blue)",
	studio: "var(--green)",
	contact: "var(--yellow)",
};

const Page: React.FC<PageProps> = ({ children, heroText = "dark", page = "home" }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const backgroundColor = colorMap[page];
		document.body.style.backgroundColor = backgroundColor;
		
		// Trigger fade-in animation
		setIsVisible(false);
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 50);
		
		return () => {
			document.body.style.backgroundColor = "";
			clearTimeout(timer);
		};
	}, [page]);

	return (
		<div className={`${heroText}-text`}>
			<TextColorContext.Provider value={heroText}>
				<Navbar />
				<main className={`page-content ${isVisible ? 'fade-in' : ''}`}>{children}</main>
			</TextColorContext.Provider>
		</div>
	);
};

export default Page;


