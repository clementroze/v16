import Hero from "./components/Hero";
import Page from "./components/Page";
import Polaroid from "./components/Polaroid";
import activities from "./data/activities";

export default function Activities() {
  return (
    <Page heroText="light" page="activities">
      <Hero page="activities">
        <div className="inner">
          <h1>Activities</h1>

          <h2>
            From consultancy to leading teams, I enjoy staying active on the
            Cornell campus.
          </h2>
        </div>
      </Hero>

      <section className="light-section activities-section">
        <div className="inner">
          <div className="line" />

          {activities.map((section, index) => (
            <div key={index} className="activity">
              <div className="meta">
                <img
                  src={section.logo}
                  alt={section.alt}
                  className="w-16 h-16"
                />

                <div className="right">
                  <h2>{section.title}</h2>
                  <p>{section.subheading}</p>
                </div>
              </div>

              <div>
                {section.polaroids.map((p, i) => (
                  <Polaroid
                    key={i}
                    size={p.size}
                    image={p.image}
                    alt={p.alt}
                    text={p.text}
                    angle={p.angle}
                    offsetX={p.offsetX}
                    offsetY={p.offsetY}
                    zIndex={p.zIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}
