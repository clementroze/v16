import "./App.css";
import Hero from "./components/Hero";
import Page from "./components/Page";

export default function Contact() {
  return (
    <Page>
      <Hero page="contact" className="contact">
        <div className="inner">
          <h1>Contact</h1>
        </div>
      </Hero>
    </Page>
  );
}
