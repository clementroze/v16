import { useState, useRef, useLayoutEffect, useCallback } from "react";
import Hero from "./components/Hero";
import Page from "./components/Page";
import WorkPanel from "./components/WorkPanel";
import CraftPanel from "./components/CraftPanel";
import LogoTooltip from "./components/LogoTooltip";

const groupedLogos = [
	{
		label: "Currently at",
		punctuation: ",",
		logos: [
			{
				imageUrl: "/home/logos/cornell.png",
				tooltipText: "Cornell University",
				accent: "#B31B1B",
				onAccent: "#FFFFFF",
			},
			{
				imageUrl: "/home/logos/google.png",
				tooltipText: "Google",
				accent: "#2E87FF",
				onAccent: "#FFFFFF",
			},
		],
	},
	{
		label: "previously at",
		punctuation: ",",
		logos: [
			{
				imageUrl: "/home/logos/frog.png",
				tooltipText: "frog",
				accent: "#AC01E6",
				onAccent: "#FFFFFF",
			},
			{
				imageUrl: "/home/logos/microsoft.png",
				tooltipText: "Microsoft",
				accent: "#0F6CBD",
				onAccent: "#FFFFFF",
			},
			{
				imageUrl: "/home/logos/replit.png",
				tooltipText: "Replit",
				accent: "#F5640C",
				onAccent: "#FFFFFF",
			},
		],
	},
	{
		label: "and leading teams at",
		punctuation: ".",
		logos: [
			{
				imageUrl: "/home/logos/dcc.png",
				tooltipText: "Design Consulting at Cornell",
				accent: "#221F2D",
				onAccent: "#FFFFFF",
			},
			{
				imageUrl: "/home/logos/dti.png",
				tooltipText: "Digital Tech & Innovation",
				accent: "#4A4A4A",
				onAccent: "#FFFFFF",
			},
		],
	},
];

export default function Home() {
	const [activeTab, setActiveTab] = useState<"work" | "craft">(() => {
		const savedTab = localStorage.getItem("homeActiveTab");
		return savedTab === "work" || savedTab === "craft" ? savedTab : "work";
	});
	const tabsRef = useRef<HTMLDivElement>(null);
	const [isFirstLoad, setIsFirstLoad] = useState(true);
	const [underlineStyle, setUnderlineStyle] = useState<{
		left: number;
		width: number;
	}>({ left: 0, width: 0 });

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
				e.preventDefault();
				const newTab = activeTab === "work" ? "craft" : "work";
				setActiveTab(newTab);
				localStorage.setItem("homeActiveTab", newTab);

				setTimeout(() => {
					const newActiveTab = tabsRef.current?.querySelector(
						`[data-tab="${newTab}"]`,
					) as HTMLButtonElement;
					if (newActiveTab) {
						newActiveTab.focus();
					}
				}, 0);
			}
		},
		[activeTab],
	);

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

			if (isFirstLoad) {
				setIsFirstLoad(false);
			}
		}
	}, [activeTab, isFirstLoad]);

	return (
		<Page heroText="light" page="home">
			<Hero
				className="home"
				heading="Clément Rozé"
				subheading="is a designer and developer at Cornell who cares about making the web accessible, beautiful, and thoughtful."
			/>

			<div className="currently-wrapper">
				<div className="inner">
					{/* <div className="currently">
						<div className="row">
							<p>Currently at</p>

							<div className="punc">
								<div className="logos">
									<img src="/home/logos/cornell.png" alt="" />
								</div>
								<p>,</p>
							</div>
						</div>

						<div className="row">
							<p>previously at</p>

							<div className="punc">
								<div className="logos">
									<img src="/home/logos/frog.png" alt="" />

									<img src="/home/logos/microsoft.png" alt="" />

									<img src="/home/logos/replit.png" alt="" />
								</div>

								<p>,</p>
							</div>
						</div>

						<div className="row">
							<p>and leading teams at</p>

							<div className="punc">
								<div className="logos">
									<img src="/home/logos/dcc.png" alt="" />

									<img src="/home/logos/dti.png" alt="" />
								</div>

								<p>.</p>
							</div>
						</div>
					</div> */}

					<div className="currently">
						{groupedLogos.map((group, index) => (
							<div className="row" key={index}>
								<p>{group.label}</p>
								<div className="logos">
									<div className="punc">
										{group.logos.map((logo, i) => (
											<LogoTooltip
												key={i}
												imageUrl={logo.imageUrl}
												tooltipText={logo.tooltipText}
												accent={logo.accent || "var(--dark)"}
												onAccent={logo.onAccent || "var(--light)"}
											/>
										))}
										<p>{group.punctuation}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="tabs-container">
				<div className="inner">
					<div
						className="tabs"
						ref={tabsRef}
						role="tablist"
						onKeyDown={handleKeyDown}
					>
						<div className="sep" />

						<div
							className="tab-underline"
							style={{
								left: `${underlineStyle.left}px`,
								width: `${underlineStyle.width}px`,
								transition: isFirstLoad
									? "none"
									: "left 0.6s cubic-bezier(0.75, 0.1, 0.2, 0.9), width 0.6s cubic-bezier(0.75, 0.1, 0.2, 0.9)",
							}}
						/>

						<button
							data-tab="work"
							role="tab"
							className={`tab work-tab ${activeTab === "work" ? "active" : ""}`}
							onClick={() => {
								setActiveTab("work");
								localStorage.setItem("homeActiveTab", "work");
							}}
							aria-selected={activeTab === "work"}
						>
							Work
						</button>

						<button
							data-tab="craft"
							role="tab"
							className={`craft tab ${activeTab === "craft" ? "active" : ""}`}
							onClick={() => {
								setActiveTab("craft");
								localStorage.setItem("homeActiveTab", "craft");
							}}
							aria-selected={activeTab === "craft"}
						>
							Craft
						</button>
					</div>
				</div>
			</div>

			<div className="panels-container">
				<div
					className="panels-wrapper"
					style={{
						transform: `translateX(${activeTab === "work" ? "0%" : "-50%"})`,
					}}
				>
					<div className="panel-slide" aria-hidden={activeTab === "craft"}>
						<div
							style={{
								opacity: `${activeTab === "work" ? "1" : "0.2"}`,
								height: `${activeTab === "work" ? "auto" : "0"}`,
							}}
						>
							<WorkPanel />
						</div>
					</div>

					<div className="panel-slide" aria-hidden={activeTab === "work"}>
						<div
							style={{
								opacity: `${activeTab === "craft" ? "1" : "0.2"}`,
								height: `${activeTab === "craft" ? "auto" : "0"}`,
							}}
						>
							<CraftPanel />
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}
