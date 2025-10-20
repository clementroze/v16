import WorkSection from "./WorkSection";
import workData from "../data/work.json";

export default function WorkPanel() {
  return (
    <div className="work-panel">
      {workData.workSections.map((section) => (
        <WorkSection
          key={section.id}
          heading={section.heading}
          subheading={section.subheading}
          logo={section.logo}
          logoAlt={section.logoAlt}
          description1={section.description1}
          description2={section.description2}
          comingSoon={section.comingSoon}
          backgroundImage={section.backgroundImage}
          backgroundColor={section.backgroundColor}
          link={section.link}
          backdropBlur={section.backdropBlur}
          accent={section.accent}
          onAccent={section.onAccent}
          cover={section.cover}
          coverAlt={section.coverAlt}
          borderColor={section.borderColor}
        />
      ))}
    </div>
  );
}
