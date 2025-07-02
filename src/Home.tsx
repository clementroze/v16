import Hero from "./components/Hero";
import Page from "./components/Page";

export default function Home() {
	return (
		<Page heroText="light">
			<Hero page="home" className="home">
				<div className="inner">
					<h1>
						Designer and developer at Cornell who cares about making the
						web accessible, beautiful, and thoughtful.
					</h1>

					<h2>
						Currently at frog. Previously at Microsoft and Replit. And
						leading teams at DCC and DTI on campus.{" "}
					</h2>
				</div>
			</Hero>
		</Page>
	);
}
