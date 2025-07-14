type HeroProps = {
	page: "home" | "about" | "activities" | "studio" | "contact";
	children: React.ReactNode;
	className?: string;
};

const colorMap: Record<HeroProps["page"], string> = {
	home: "var(--dark)",
	about: "var(--blue)",
	activities: "var(--red)",
	studio: "var(--green)",
	contact: "var(--yellow)",
};

export default function Hero({ page, children, className }: HeroProps) {
	const backgroundColor = colorMap[page];

	return (
		<section className={`hero ${className}`} style={{ backgroundColor }}>
			{children}
		</section>
	);
}
