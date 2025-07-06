import craftData from "../data/craft.json";

export default function CraftPanel() {
  return (
    <div className="craft-panel">
      <div className="inner">
        <div className="craft-grid">
          {craftData.map((item, i) => (
            <div
              key={i}
              className="craft-item"
              style={{
                gridColumn: `span ${item.span}`,
              }}
            >
              {item.images.map((img, j) => (
                <img
                  key={j}
                  src={img.src}
                  alt={img.alt}
                  style={{
                    height: `${img.height}px`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
