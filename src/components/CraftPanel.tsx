
import craftData from "../data/craft.json";

export default function CraftPanel() {
  // Define the layout pattern you specified
  const layoutPattern = [4, 2, 4, 2, 2, 4, 2, 4, 2, 4, 4, 2, 2, 2, 2, 1];
  
  return (
    <div className="craft-panel">
      <div className="inner">
        <div className="craft-grid">
          {craftData.map((item, i) => {
            // Use the layout pattern, cycling through if we have more items than pattern entries
            const span = layoutPattern[i % layoutPattern.length];
            
            return (
              <div
                key={i}
                className="craft-item"
                style={{
                  gridColumn: `span ${span}`,
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
