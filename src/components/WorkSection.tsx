import Button from "./Button";

type WorkSectionProps = {
	heading: string;
	subheading: string;
	logo: string;
	logoAlt: string;
	description1: string;
	description2: string;
	comingSoon?: boolean;
	backgroundImage?: string;
	backgroundColor?: string;
	link: string;
	backdropBlur?: number;
	accent?: string;
	onAccent?: string;
	cover?: string;
	coverAlt?: string;
	borderColor?: string;
};

export default function WorkSection({
	heading,
	subheading,
	logo,
	logoAlt,
	description1,
	description2,
	comingSoon,
	backgroundImage,
	backgroundColor,
	link,
	backdropBlur,
	accent,
	onAccent = "#ffffff",
	cover,
	coverAlt,
	borderColor,
}: WorkSectionProps) {
	return (
		<section
			className="work-section"
			style={
				{
					background: backgroundColor
						? backgroundColor
						: `url(${backgroundImage}) center/cover no-repeat`,
					"--accent": `${accent}`,
					"--onAccent": `${onAccent}`,
				} as React.CSSProperties
			}
		>
			<div
				className="backdrop"
				style={{ backdropFilter: `blur(${backdropBlur}px)` }}
			/>
			<div className="inner">
				<div className="top">
					<div className="left">
						<div className="info">
							<img src={logo} alt={logoAlt} />

							<h2>
								<span className="heading">{heading}</span>{" "}
								<span className="subheading">{subheading}</span>
							</h2>
						</div>

						{comingSoon ? (
							<Button
								href="#"
								label="Coming Soon"
								variant="light-10"
								disabled
							/>
						) : (
							<Button
								href={link}
								label="View case study"
								variant="light-10"
							/>
						)}
					</div>

					<div className="right">
						<p>{description1}</p>
						<p>{description2}</p>
					</div>
				</div>

				<div
					className="img"
					style={{
						border: `1px solid ${borderColor || "var(--light-10)"}`,
					}}
				>
					<img src={cover} alt={coverAlt} />
				</div>
			</div>
		</section>
	);
}
