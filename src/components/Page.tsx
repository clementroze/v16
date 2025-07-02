import React from "react";
import { TextColorContext } from "../utilities/HeroTextColorContext";
import Navbar from "./Navbar";

type PageProps = {
	children: React.ReactNode;
	heroText?: "light" | "dark";
};

const Page: React.FC<PageProps> = ({ children, heroText = "dark" }) => {
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


