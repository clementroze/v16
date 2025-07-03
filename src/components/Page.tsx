import React, { useEffect } from "react";
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
	useEffect(() => {
		const backgroundColor = colorMap[page];
		document.body.style.backgroundColor = backgroundColor;
		
		return () => {
			document.body.style.backgroundColor = "";
		};
	}, [page]);

	return (
		<div className={`${heroText}-text`}>
			<TextColorContext.Provider value={heroText}>
				<Navbar />
				<main>{children}</main>
			</TextColorContext.Provider>
		</div>
	);
};

export default Page;


