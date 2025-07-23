import Hero from "./components/Hero";
import Page from "./components/Page";
import Polaroid from "./components/Polaroid";
import activities from "./data/activities";

export default function Activities() {
  return (
    <Page heroText="light" page="activities">
      <Hero
        heading="Activities."
        subheading="I love staying hands-on in Cornell’s creative tech spaces by leading teams and teaching design."
      />

      <div className="content">
        <div className="inner">
          <div className="line" />

          {activities.map((section, index) => (
            <section key={index} className="activity">
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
                    marginBottom={p.marginBottom}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Page>
  );
}
