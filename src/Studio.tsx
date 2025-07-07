import Hero from "./components/Hero";
import Page from "./components/Page";

export default function Studio() {
  return (
    <Page page="studio">
      <Hero page="studio">
        <div className="inner">
          <h1>Studio</h1>

          <h2>
            Hire me to design (and sometimes develop) your website, platform, or
            app.
          </h2>
        </div>
      </Hero>

      <section className="light-section studio-section">
        <h3>Coming soon ✦</h3>
      </section>
    </Page>
  );
}
