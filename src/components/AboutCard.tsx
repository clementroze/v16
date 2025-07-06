type AboutCardProps = {
	title: string;
	date: string;
	description?: string;
	logo?: string;
	logoAlt?: string;
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
	clients,
}: AboutCardProps) {
	return (
		<div className="entry-card">
			{logo && <img src={logo} alt={logoAlt} />}
			<div className="meta">
				<h4>{title}</h4>
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
									width: `${client.width}px`,
									height: `${client.height}px`,
								}}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
