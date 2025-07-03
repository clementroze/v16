import Button from "./Button";

type WorkSectionProps = {
	heading: string;
	subheading: string;
	logo: string;
	logoAlt: string;
	description1: string;
	description2: string;
	backgroundImage: string;
	link: string;
	backdropBlur?: number;
};

export default function WorkSection({
	heading,
	subheading,
	logo,
	logoAlt,
	description1,
	description2,
	backgroundImage,
	link,
	backdropBlur,
}: WorkSectionProps) {
	return (
		<section
			className="work-section"
			style={{ backgroundImage: `url(${backgroundImage})` }}
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
								{heading}{" "}
								<span className="subheading">{subheading}</span>
							</h2>
						</div>

						<Button href={link} label="Learn more" variant="light-10" />
					</div>

					<div className="right">
						<p>{description1}</p>
						<p>{description2}</p>
					</div>
				</div>

				<div className="img" />
			</div>
		</section>
	);
}
