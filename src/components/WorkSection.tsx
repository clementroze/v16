
type WorkSectionProps = {
  heading: string;
  subheading: string;
  logo: string;
  logoAlt: string;
  description1: string;
  description2: string;
  backgroundImage: string;
  learnMoreLink: string;
};

export default function WorkSection({
  heading,
  subheading,
  logo,
  logoAlt,
  description1,
  description2,
  backgroundImage,
  learnMoreLink
}: WorkSectionProps) {
  return (
    <section 
      className="work-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="work-section-content">
        <div className="work-section-header">
          <img src={logo} alt={logoAlt} className="work-section-logo" />
          <div className="work-section-titles">
            <h3>{heading}</h3>
            <h4>{subheading}</h4>
          </div>
        </div>
        
        <div className="work-section-descriptions">
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
        
        <a href={learnMoreLink} className="work-section-link">
          Learn more →
        </a>
      </div>
    </section>
  );
}
