import { useState, useRef, useLayoutEffect } from "react";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Page from "./components/Page";
import WorkPanel from "./components/WorkPanel";
import CraftPanel from "./components/CraftPanel";

export default function Home() {
	const [activeTab, setActiveTab] = useState<"work" | "craft">("work");
	const tabsRef = useRef<HTMLDivElement>(null);
	const [underlineStyle, setUnderlineStyle] = useState<{
		left: number;
		width: number;
	}>({ left: 0, width: 0 });

	useLayoutEffect(() => {
		if (!tabsRef.current) return;

		const activeTabElement = tabsRef.current.querySelector(
			`[data-tab="${activeTab}"]`,
		) as HTMLButtonElement;

		if (activeTabElement) {
			const tabsRect = tabsRef.current.getBoundingClientRect();
			const tabRect = activeTabElement.getBoundingClientRect();

			setUnderlineStyle({
				left: tabRect.left - tabsRect.left,
				width: tabRect.width,
			});
		}
	}, [activeTab]);

	return (
		<Page heroText="light">
			<Hero page="home" className="home">
				<div className="inner">
					<div className="top">
						<div className="text">
							<h1>
								Designer and developer at Cornell who cares about making
								the web accessible, beautiful, and thoughtful.
							</h1>

							<h2>
								Currently at frog. Previously at Microsoft and Replit.
								And leading teams at DCC and DTI on campus.
							</h2>
						</div>

						<div className="button-row">
							<Button
								variant="light"
								label="Get in touch"
								href="/contact"
							/>
							<Button
								variant="light-10"
								label="About me"
								href="/about"
							/>
						</div>
					</div>

					<div className="tabs" ref={tabsRef} role="tablist">
						<div className="sep" />

						<div
							className="tab-underline"
							style={{
								left: `${underlineStyle.left}px`,
								width: `${underlineStyle.width}px`,
							}}
						/>

						<button
							data-tab="work"
							role="tab"
							className={`tab ${activeTab === "work" ? "active" : ""}`}
							onClick={() => setActiveTab("work")}
							aria-selected={activeTab === "work"}
						>
							Work
						</button>

						<button
							data-tab="craft"
							role="tab"
							className={`craft tab ${activeTab === "craft" ? "active" : ""}`}
							onClick={() => setActiveTab("craft")}
							aria-selected={activeTab === "craft"}
						>
							Craft
						</button>
					</div>
				</div>
			</Hero>

			<section>
				<div className="tabs-container">
					<div className="panels-container">
						<div
							className="panels-wrapper"
							style={{
								transform: `translateX(${activeTab === "work" ? "0%" : "-50%"})`,
							}}
						>
							<div className="panel-slide">
								<WorkPanel />
							</div>

							<div className="panel-slide">
								<CraftPanel />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Page>
	);
}
