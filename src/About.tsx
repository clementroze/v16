import Hero from "./components/Hero";
import Page from "./components/Page";
import AboutCard from "./components/AboutCard";
import aboutData from "./data/about.json";
import { Link } from "react-router-dom";
import Button from "./components/Button";

export default function About() {
  const { work } = aboutData;

  return (
    <Page heroText="light" page="about">
      <Hero
        heading="About."
        subheading="I’ve been designing since I was 15.
        Obsessed with pixels and polish.
        Driven by purpose."
      />

      <div className="content">
        <section className="bio">
          <img src="/pfp.png" alt="Headshot of Clément Rozé" />

          <h3>
            Hi, I’m Clément Rozé. I'm a designer and developer with an
            international upbringing and a love for detail.
          </h3>

          <p>
            Born in New York, raised in London, and shaped by French and
            Singaporean roots, I’ve always lived at the crossroads. That lens of
            contrast and connection deeply informs how I design: layered,
            contextual, and grounded in multiple perspectives.
          </p>

          <p>
            I believe great design should be both accessible and beautiful.
            Whether I’m fine-tuning a Figma component, obsessing over a CSS
            pseudo-element, or diving into ARIA specs, I care about the little
            things that make interfaces feel <em>just right</em>.
          </p>

          <p>
            When I’m not up at 4 a.m. nudging pixels into place, you might find
            me playing piano or ping pong (though not at the same time). I'm
            also an avid reader – from daily news to science fiction, I love
            staying curious about the world!
          </p>

          <div className="button-row">
            <Button href="/contact" label="Get in touch" variant="light" />

            <Button href="/resume" label="View my résumé" variant="light-10" />
          </div>
        </section>

        <div className="sep" />

        <section className="work-experience">
          <h3>Work Experience</h3>

          {work.map((job, index) => (
            <div key={index} className="entry-card-wrapper">
              <AboutCard {...job} />
            </div>
          ))}
        </section>

        <div className="sep" />

        <section className="more">
          <h3>More</h3>

          <div className="more-container">
            <article className="resume">
              <div className="img-wrapper">
                <img src="/contact/resume.png" alt="" />
              </div>

              <Link
                to="/Clement-Roze-Resume.pdf"
                className="link-animation"
                target="_blank"
              >
                <h4>Résumé</h4>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 7H17V17"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 17L17 7"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </article>

            <article className="mac">
              <div className="img-wrapper">
                <div className="mac-wrapper">
                  <img src="/about/mac.png" alt="" className="laptop" />

                  <img src="/about/DCC.png" className="sticker dcc" />

                  <img src="/about/DTI.png" className="sticker dti" />

                  <img src="/about/Cornell.png" className="sticker cornell" />

                  <img src="/about/CUXD.png" className="sticker cuxd" />

                  <img src="/about/WVBR.png" className="sticker wvbr" />
                </div>
              </div>

              <Link to="/activities" className="link-animation">
                <h4>Activities</h4>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 7H17V17"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 17L17 7"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </article>

            <article className="studio">
              <div className="img-wrapper">
                <img src="/about/row1.png" alt="" className="row1" />

                <img src="/about/row2.png" alt="" className="row2" />

                <img src="/about/row3.png" alt="" className="row3" />
              </div>

              <Link to="/studio" className="link-animation">
                <h4>Work with me</h4>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 7H17V17"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 17L17 7"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </article>
          </div>
        </section>
      </div>
    </Page>
  );
}
