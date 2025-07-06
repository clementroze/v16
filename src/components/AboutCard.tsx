type AboutCardProps = {
	title: string;
	date: string;
	description?: string;
	logo?: string;
	logoAlt?: string;
};

export default function AboutCard({
	title,
	date,
	description,
	logo,
	logoAlt,
}: AboutCardProps) {
	return (
		<div className="entry-card">
			{logo && <img src={logo} alt={logoAlt} />}
			<div className="meta">
				<h4>{title}</h4>
				<p className="date">{date}</p>
			</div>

			{description && <p>{description}</p>}
		</div>
	);
}
