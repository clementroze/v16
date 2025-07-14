import { ReactNode } from "react";

type PolaroidProps = {
	size: "wide" | "default";
	image: string;
	alt: string;
	text?: ReactNode;
	angle: number;
	offsetX: number;
	offsetY: number;
};

export default function Polaroid({
	size = "default",
	image,
	alt,
	text,
	angle,
	offsetX,
	offsetY,
}: PolaroidProps) {
	return (
		<article
			className={`polaroid ${size === "default" ? "default" : "wide"}`}
			style={
				{
					// Pass rotation as a custom CSS variable
					"--rotate-angle": `rotate(${angle}deg)`,
					left: `${offsetX}px`,
					top: `${offsetY}px`,
					position: "relative",
				} as React.CSSProperties
			}
		>
			<img src={image} alt={alt} />

			{text && <div className="text">{text}</div>}
		</article>
	);
}
