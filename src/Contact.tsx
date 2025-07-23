import React from "react";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Page from "./components/Page";

const contactCards = [
  {
    icon: "/contact/resume.png",
    link: "/Clement-Roze-Resume.pdf",
    title: "Résumé",
    accentColor: "#A2A2A2",
    resume: true,
  },
  {
    icon: "/contact/linkedin.png",
    link: "https://www.linkedin.com/in/clementroze/",
    title: "LinkedIn",
    accentColor: "#0C64C5",
  },
  {
    icon: "/contact/x.png",
    link: "https://x.com/@thebookie0",
    title: "X (Twitter)",
    accentColor: "#FFFFFF",
  },
  {
    icon: "/contact/dribbble.png",
    link: "https://dribbble.com/clementroze",
    title: "Dribbble",
    accentColor: "#E84C88",
  },
];

interface ContactCardProps {
  icon: string;
  link: string;
  title: string;
  accentColor: string;
  resume?: boolean;
}

function ContactCard({
  icon,
  link,
  title,
  accentColor,
  resume,
}: ContactCardProps) {
  return (
    <article
      className="contact-card"
      style={{ "--card-accent-color": accentColor } as React.CSSProperties}
    >
      <div className="top-line" style={{ background: `${accentColor}` }} />

      <img
        src={icon}
        alt=""
        className={resume ? "resume-img" : ""}
        style={
          resume
            ? { width: "108px", height: "139px", top: "-70px" }
            : { width: "64px", height: "64px" }
        }
      />

      <a href={link} target="_blank">
        <h3>{title}</h3>
      </a>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M7 7H17V17"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 17L17 7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </article>
  );
}

export default function Contact() {

  return (
    <Page page="contact">
      <Hero heading="Contact." subheading="Feel free to get in touch!">
        {/* <div className="inner"> */}
    
        {/* </div> */}
      </Hero>

      <section className="light-section">
        <div className="inner">
          <div className="text-wrapper">
            <div className="text">
              <p>
                I’m always happy to talk about design, side projects, or just to
                meet someone new.
              </p>

              <p>Here are some other ways to find me online:</p>
            </div>
          </div>

          <div className="contact-cards">
            {contactCards.map((card, index) => (
              <ContactCard
                key={index}
                icon={card.icon}
                link={card.link}
                title={card.title}
                accentColor={card.accentColor}
                resume={card.resume}
              />
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
