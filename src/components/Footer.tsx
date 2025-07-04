import { Link } from "react-router-dom";
import Button from "./Button";

export default function Footer() {
	return (
		<footer className="light-text">
			<div className="inner">
				<div className="col">
					<p>Pages</p>

					<ul>
						<li>
							<Link to="">Work</Link>
						</li>

						<li>
							<Link to="">About</Link>
						</li>

						<li>
							<Link to="">Studio</Link>
						</li>

						<li>
							<Link to="">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="col">
					<p>Socials</p>

					<ul>
						<li>
							<Link to="">Email</Link>
						</li>

						<li>
							<Link to="">Résumé</Link>
						</li>

						<li>
							<Link to="">LinkedIn</Link>
						</li>

						<li>
							<Link to="">Twitter</Link>
						</li>

						<li>
							<Link to="">Dribbble</Link>
						</li>
					</ul>
				</div>

				<div className="col double">
					<div className="mini-col">
						<p>Copyright</p>

						<p className="light">&copy; 2025 Clément Rozé </p>
					</div>

					<div className="mini-col">
						<p>Version</p>

						<div className="row">
							<p className="light">15.2</p>

							<p className="light" aria-hidden>
								✦
							</p>

							<Link to="">View archive</Link>
						</div>
					</div>
				</div>

				<div className="button-row">
					<Button href="/contact" label="Get in touch" variant="light" />

					<Button href="/about" label="About me" variant="light-10" />
				</div>
			</div>
		</footer>
	);
}
