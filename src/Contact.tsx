import "./App.css";
import Hero from "./components/Hero";
import Page from "./components/Page";

export default function Contact() {
  return (
    <Page page="contact">
      <Hero page="contact">
        <div className="inner">
          <h1>Contact</h1>

          <h2>.</h2>
        </div>
      </Hero>

      <section className="light-section contact">
      </section>
    </Page>
  );
}
