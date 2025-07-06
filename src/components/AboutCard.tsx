import { Link } from "react-router-dom";

type AboutCardProps = {
	title: string;
	date: string;
	description?: string;
	logo?: string;
	logoAlt?: string;
	link?: string;
	clients?: Array<{
		logo: string;
		alt: string;
		width: string;
		height: string;
	}>;
};

export default function AboutCard({
	title,
	date,
	description,
	logo,
	logoAlt,
	link,
	clients,
}: AboutCardProps) {
	return (
		<div className="entry-card">
			{logo && <img src={logo} alt={logoAlt} />}
			<div className="meta">
				<div className="top">
					<h4>{title}</h4>
					{link && (
						<Link to={link}>
							<span>Learn more</span>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M7 7H17V17"
									stroke-width="1.67"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M7 17L17 7"
									stroke-width="1.67"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</Link>
					)}
				</div>
				<p className="date">{date}</p>
			</div>

			{description && <p>{description}</p>}

			{clients && (
				<div className="clients">
					{clients.map((client, index) => (
						<div className="client" key={index}>
							<img
								src={client.logo}
								alt={client.alt}
								style={{
									width: `${client.width}`,
									height: `${client.height}`,
								}}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
