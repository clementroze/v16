import craftData from "../data/craft.json";

export default function CraftPanel() {
  return (
    <div className="craft-panel">
      <div className="inner">
        <p>placeholder</p>

        <div className="gallery">
          {craftData.sections.map((section) => (
            <div key={section.id} className="section">
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
          ))}
        </div>
      </div>
    </div>
  );
}
