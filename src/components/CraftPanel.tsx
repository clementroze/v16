import craftData from "../data/craft.json";

export default function CraftPanel() {
  return (
    <div className="craft-panel">
      <div className="inner">
        {craftData.map((section, i) => (
          <section key={i} className="row">
            {section.columns.map((col, j) => (
              <div
                key={j}
                className="col"
                style={{
                  gridColumn: `span ${col.span}`,
                }}
              >
                {col.images.map((img, k) => (
                  <img
                    key={k}
                    src={img.src}
                    alt={img.alt}
                    style={{
                      height: `${img.height}px`,
                    }}
                  />
                ))}
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
