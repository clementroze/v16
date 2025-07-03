import "./App.css";
import Hero from "./components/Hero";
import Page from "./components/Page";

export default function Contact() {
  return (
    <Page page="contact">
      <Hero page="contact">
        <div className="inner">
          <h1>Contact</h1>

          <h2>
            Let's work together to create something beautiful, thoughtful, and
            meaningful.
          </h2>
        </div>
      </Hero>
    </Page>
  );
}