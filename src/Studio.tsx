import Hero from "./components/Hero";
import Page from "./components/Page";

export default function Studio() {
  return (
    <Page page="studio">
      <Hero
        heading="Studio."
        subheading="Studio lorem ipsum dolor sit amet, consectetur adipiscing elit samfere elum. Let's collaborate together."
      />

      <section className="studio-section">
        <h3>Coming soon ✦</h3>
      </section>
    </Page>
  );
}
