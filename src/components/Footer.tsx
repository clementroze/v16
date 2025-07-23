import { Link } from "react-router-dom";
import Button from "./Button";
import { usePageContext } from "./Page";

const backgroundImageMap: Record<string, string> = {
	home: "/home/footer.png",
	about: "/about/footer.png",
	activities: "/activities/footer.png",
	studio: "/studio/footer.png",
	contact: "/contact/footer.png",
};

export default function Footer() {
	const page = usePageContext();

	return (
		<footer style={{ backgroundImage: `url(${backgroundImageMap[page]})` }}>
			<div className="inner">
				<div className="col left">
					<h2>
						<span>Let's talk.</span>{" "}
						<span>I'd love to hear from you.</span>
					</h2>

					<Button href="/contact" label="Get in touch" variant="light" />
				</div>
				<div className="col">
					<p>Pages</p>

					<ul>
						<li>
							<Link to="/">Work</Link>
						</li>

						<li>
							<Link to="/about">About</Link>
						</li>

						<li>
							<Link to="/studio">Studio</Link>
						</li>

						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="col">
					<p>Socials</p>

					<ul>
						<li>
							<Link to="/contact">Email</Link>
						</li>

						<li>
							<Link to="/Clement-Roze-Resume.pdf" target="_blank">
								Résumé
							</Link>
						</li>

						<li>
							<Link
								to="https://www.linkedin.com/in/clementroze/"
								target="_blank"
							>
								LinkedIn
							</Link>
						</li>

						<li>
							<Link to="https://x.com/@thebookie0" target="_blank">
								Twitter
							</Link>
						</li>

						<li>
							<Link
								to="https://dribbble.com/clementroze"
								target="_blank"
							>
								Dribbble
							</Link>
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

							<Link to="" className="archive">
								View archive
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
