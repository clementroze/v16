
import { useState } from "react";

type LogoData = {
	src: string;
	alt: string;
	tooltip: string;
};

type LogoTooltipProps = {
	logos: LogoData[];
};

export default function LogoTooltip({ logos }: LogoTooltipProps) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className="logos">
			{logos.map((logo, index) => (
				<div
					key={index}
					className="logo-wrapper"
					onMouseEnter={() => setHoveredIndex(index)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<img src={logo.src} alt={logo.alt} />
					{hoveredIndex === index && (
						<div className="tooltip">
							{logo.tooltip}
						</div>
					)}
				</div>
			))}
		</div>
	);
}
