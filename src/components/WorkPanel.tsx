import WorkSection from "./WorkSection";
import workData from "../data/data.json";

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
          backgroundImage={section.backgroundImage}
          link={section.link}
          backdropBlur={section.backdropBlur}
        />
      ))}
    </div>
  );
}
