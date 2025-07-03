import "./App.css";
import Hero from "./components/Hero";
import Page from "./components/Page";

export default function About() {
  return (
    <Page heroText="light" page="about">
      <Hero page="about">
        <div className="inner">
          <h1>About</h1>

          <h2>
            He approaches design with craft and care, building digital windows
            that are polished.
          </h2>
        </div>
      </Hero>

      <section className="light-section about"></section>
    </Page>
  );
}
