
type AboutCardProps = {
	title: string;
	date: string;
	description?: string;
	logo?: string;
	logoAlt?: string;
	clients?: Array<{
		logo: string;
		alt: string;
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
				<div style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					gridTemplateRows: 'repeat(4, 1fr)',
					gap: '12px',
					marginTop: '16px'
				}}>
					{clients.map((client, index) => (
						<img
							key={index}
							src={client.logo}
							alt={client.alt}
							style={{
								width: '32px',
								height: '32px',
								borderRadius: 'var(--img-border-radius)'
							}}
						/>
					))}
				</div>
			)}
		</div>
	);
}
