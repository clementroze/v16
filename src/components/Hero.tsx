type HeroProps = {
	page: "home" | "about" | "activities" | "studio" | "contact";
	children?: React.ReactNode;
	className?: string;
	heading?: string;
	subheading?: string;
};

const backgroundImageMap: Record<HeroProps["page"], string> = {
	home: "/home/hero.png",
	about: "/about/hero.png",
	activities: "/activities/hero.png",
	studio: "/studio/hero.png",
	contact: "/contact/hero.png",
};

export default function Hero({
	page,
	children,
	className,
	heading = "",
	subheading = "",
}: HeroProps) {
	return (
		<section
			className={`hero ${className}`}
			style={{ backgroundImage: `url(${backgroundImageMap[page]})` }}
		>
			<div className="inner">
				<h1>{heading}</h1>
				<h2>{subheading}</h2>
			</div>
			{children}
		</section>
	);
}
