import { usePageContext } from "./Page";

type HeroProps = {
	children?: React.ReactNode;
	className?: string;
	heading?: string;
	subheading?: string;
};

const backgroundImageMap: Record<string, string> = {
	home: "/home/hero.png",
	about: "/about/hero.png",
	activities: "/activities/hero.png",
	studio: "/studio/hero.png",
	contact: "/contact/hero.png",
};

export default function Hero({
	children,
	className,
	heading = "",
	subheading = "",
}: HeroProps) {
	const page = usePageContext();

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
