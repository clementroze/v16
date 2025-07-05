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
    accentColor: "#000000",
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
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText("clementproze@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Page page="contact">
      <Hero page="contact">
        <div className="inner">
          <h1>Contact</h1>

          <div className="letter-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="502"
              height="351"
              viewBox="0 0 502 351"
              fill="none"
              className="letter-bg"
            >
              <g clip-path="url(#clip0_3529_24679)">
                <path
                  d="M474.031 89.7333L264.04 3.5341C259.976 1.86707 255.507 1 250.976 1C246.445 1 241.975 1.86707 237.912 3.5341L27.9205 89.7333C19.8701 93.0138 13.083 98.1012 8.32598 104.421C3.56892 110.74 1.03138 118.04 1 125.496V310.019C1 332.098 22.8008 350 49.6972 350H452.303C479.199 350 501 332.098 501 310.019V125.496C500.964 118.036 498.419 110.733 493.654 104.413C488.888 98.0932 482.091 93.0082 474.031 89.7333Z"
                  fill="url(#paint0_linear_3529_24679)"
                  stroke="black"
                  stroke-opacity="0.1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3529_24679"
                  x1="251"
                  y1="1"
                  x2="251"
                  y2="350"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#F3F3F3" />
                </linearGradient>
                <clipPath id="clip0_3529_24679">
                  <rect width="502" height="351" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="paper">
              <div className="top">
                <h2>Connect with me :)</h2>

                <Button
                  href={"mailto:clementproze@gmail.com"}
                  label="Email me"
                  variant={"dark"}
                />
              </div>

              <button className="copy" onClick={handleCopyClick}>
                {isCopied ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="checkmark-icon"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 13 12"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_3529_24690)">
                        <path
                          d="M10.5078 3.99902H5.50781C4.95553 3.99902 4.50781 4.44674 4.50781 4.99902V9.99902C4.50781 10.5513 4.95553 10.999 5.50781 10.999H10.5078C11.0601 10.999 11.5078 10.5513 11.5078 9.99902V4.99902C11.5078 4.44674 11.0601 3.99902 10.5078 3.99902Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="first"
                        />
                        <path
                          d="M2.50781 7.99902C1.95781 7.99902 1.50781 7.54902 1.50781 6.99902V1.99902C1.50781 1.44902 1.95781 0.999023 2.50781 0.999023H7.50781C8.05781 0.999023 8.50781 1.44902 8.50781 1.99902"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="second"
                        />
                      </g>
                    </svg>

                    <span>Or copy my address</span>
                  </>
                )}
              </button>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="518"
              height="261"
              viewBox="0 0 518 261"
              fill="none"
              className="letter-fg"
            >
              <g clip-path="url(#clip0_3529_24682)">
                <g filter="url(#filter0_d_3529_24682)">
                  <path
                    d="M325.272 113.061L277.75 83.5488C272.479 80.275 265.991 78.4977 259.313 78.4977C252.634 78.4977 246.146 80.275 240.875 83.5488L193.069 113.235L15.0095 5C12.0047 7.49991 9 16.9996 9 21.9994L9.01272 210.993C8.71357 218.459 13.7089 228.278 22.2335 235.492C30.8789 242.979 43.2057 248.242 57.0884 247.991H460.912C474.794 248.242 487.121 242.979 495.766 235.492C504.291 228.278 509.286 218.459 508.987 210.993V21.9994C508.987 16.9996 505.983 7.49991 502.978 5L325.272 113.061Z"
                    fill="url(#paint0_linear_3529_24682)"
                  />
                  <path
                    d="M439.492 183.994L325.272 113.061M325.272 113.061L277.75 83.5488C272.479 80.275 265.991 78.4977 259.313 78.4977C252.634 78.4977 246.146 80.275 240.875 83.5488M325.272 113.061L502.978 5C505.983 7.49991 508.987 16.9996 508.987 21.9994V210.993C509.286 218.459 504.291 228.278 495.766 235.492C487.121 242.979 474.794 248.242 460.912 247.991H57.0884C43.2057 248.242 30.8789 242.979 22.2335 235.492C13.7089 228.278 8.71357 218.459 9.01272 210.993L9 21.9994C9 16.9996 12.0047 7.49991 15.0095 5L193.069 113.235L240.875 83.5488M240.875 83.5488L79.1214 183.994"
                    stroke="black"
                    stroke-opacity="0.1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_d_3529_24682"
                  x="0.5"
                  y="0.5"
                  width="517"
                  height="260"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3529_24682"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3529_24682"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_3529_24682"
                  x1="259"
                  y1="5"
                  x2="259"
                  y2="248"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#F3F3F3" />
                </linearGradient>
                <clipPath id="clip0_3529_24682">
                  <rect width="518" height="261" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
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
