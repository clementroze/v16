import Hero from "./components/Hero";
import Page from "./components/Page";
import AboutCard from "./components/AboutCard";
import aboutData from "./data/about.json";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
  const { work, education, activities } = aboutData;

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

      <section className="light-section about-section">
        <div className="inner">
          <div className="img-wrapper">
            <img src="/pfp.png" alt="Headshot of Clément Rozé" />
          </div>

          <div className="text bio">
            <p>
              I was born in New York City and grew up in London, and my family
              is originally from France and Singapore.
            </p>

            <p>
              I’m passionate about all things design – I’ll happily debate
              Helvetica vs. Inter, obsess over CSS pseudo-elements, or rave
              about my favorite Figma shortcuts. I believe great design should
              be both accessible and beautiful.
            </p>

            <p>
              So you’ll often find me deep-diving into the latest ARIA specs or
              dissecting the visual details that make an interface feel just
              right.
            </p>

            <p>
              When I’m not up at 4 a.m. fine-tuning pixels, I’m probably playing
              piano or ping pong (though not at the same time). I'm also an avid
              reader. Whether it's news or literature, I love staying curious
              about the world!
            </p>
          </div>

          <div className="sep" />

          <h3>Work</h3>

          <div className="text">
            {work.map((job, index) => (
              <div key={index} className="entry-card-wrapper">
                <AboutCard {...job} />
                {index !== work.length - 1 && <div className="sep" />}
              </div>
            ))}
          </div>

          <div className="sep" />

          <h3>Education</h3>

          <div className="text">
            {education.map((edu, index) => (
              <div key={index} className="entry-card-wrapper">
                <AboutCard {...edu} />
                {index !== education.length - 1 && <div className="sep" />}
              </div>
            ))}
          </div>

          <div className="sep" />

          <h3>Activities</h3>

          <div className="text">
            {activities.map((activity, index) => (
              <div key={index} className="entry-card-wrapper">
                <AboutCard {...activity} />
                {index !== activities.length - 1 && <div className="sep" />}
              </div>
            ))}
          </div>

          <div className="sep" />

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
                <img src="/about/mac.png" alt="" className="laptop" />

                <img src="/about/DCC.png" className="sticker dcc" />

                <img src="/about/DTI.png" className="sticker dti" />

                <img src="/about/Cornell.png" className="sticker cornell" />

                <img src="/about/CUXD.png" className="sticker cuxd" />

                <img src="/about/WVBR.png" className="sticker wvbr" />
              </div>

              <Link to="" className="link-animation">
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
        </div>
      </section>
    </Page>
  );
}
