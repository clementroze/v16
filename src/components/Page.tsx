import React, { useEffect } from "react";
import { TextColorContext } from "../utilities/HeroTextColorContext";
import Footer from "./Footer";
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

const Page: React.FC<PageProps> = ({
	children,
	heroText = "dark",
	page = "home",
}) => {
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

	return (
		<div className={`${heroText}-text`}>
			<TextColorContext.Provider value={heroText}>
				<a href="#main-content" className="skip-to-main">
					Skip to main content
				</a>
				<Navbar />
				<main id="main-content" tabIndex={-1} className={page}>
					{children}
				</main>
				<Footer />
			</TextColorContext.Provider>
		</div>
	);
};

export default Page;
