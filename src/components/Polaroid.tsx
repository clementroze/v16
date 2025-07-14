import { ReactNode } from "react";

type PolaroidProps = {
	size: "wide" | "default";
	image: string;
	alt: string;
	text?: ReactNode;
	angle: number;
	offsetX: number;
	offsetY: number;
	zIndex?: number;
};

export default function Polaroid({
	size = "default",
	image,
	alt,
	text,
	angle,
	offsetX,
	offsetY,
	zIndex,
}: PolaroidProps) {
	return (
		<article
			className={`polaroid ${size === "default" ? "default" : "wide"}`}
			style={
				{
					"--rotate-angle": `rotate(${angle}deg)`,
					left: `${offsetX}px`,
					top: `${offsetY}px`,
					position: "relative",
					zIndex: zIndex,
				} as React.CSSProperties
			}
		>
			<img src={image} alt={alt} />

			{text && <div className="text">{text}</div>}
		</article>
	);
}
