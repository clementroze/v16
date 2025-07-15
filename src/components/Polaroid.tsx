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
	marginBottom?: number;
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
	marginBottom,
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
					marginBottom: `${marginBottom}px`,
				} as React.CSSProperties
			}
		>
			<div className="img-wrapper">
				<img src={image} alt={alt} />
			</div>

			{text && <div className="text">{text}</div>}
		</article>
	);
}
