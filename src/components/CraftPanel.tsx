
import craftData from "../data/craft.json";

export default function CraftPanel() {
  return (
    <div className="craft-panel">
      <div className="inner">
        <div className="gallery">
          {craftData.sections.map((section) => (
            <div key={section.id} className="section">
              <h3 className="section-title">{section.title}</h3>
              <div className="masonry-grid">
                {section.images.map((img, i) => (
                  <div
                    key={i}
                    className="image-wrapper"
                    style={{
                      gridColumn: `span ${img.colSpan}`,
                      height: `${img.height}px`,
                    }}
                  >
                    <img src={img.src} alt={img.alt} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
