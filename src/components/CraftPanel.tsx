
import craftData from "../data/craft.json";

export default function CraftPanel() {
  // Function to distribute images across columns based on their widths
  const distributeImages = (images: any[]) => {
    const columns: any[][] = [[], [], [], [], [], []]; // 6 columns
    const columnWidths = [0, 0, 0, 0, 0, 0]; // Track current width of each column
    
    // Sort images by colSpan to prioritize wider images
    const sortedImages = [...images].sort((a, b) => b.colSpan - a.colSpan);
    
    sortedImages.forEach((img) => {
      // Find the column(s) that can accommodate this image width
      let bestStartCol = 0;
      let minTotalWidth = Infinity;
      
      // Try each possible starting position for this image
      for (let startCol = 0; startCol <= 6 - img.colSpan; startCol++) {
        let totalWidth = 0;
        for (let i = startCol; i < startCol + img.colSpan; i++) {
          totalWidth += columnWidths[i];
        }
        
        if (totalWidth < minTotalWidth) {
          minTotalWidth = totalWidth;
          bestStartCol = startCol;
        }
      }
      
      // Add image to the first column of its span
      columns[bestStartCol].push(img);
      
      // Update column widths for all columns this image spans
      for (let i = bestStartCol; i < bestStartCol + img.colSpan; i++) {
        columnWidths[i] += img.height;
      }
    });
    
    return columns.filter(column => column.length > 0);
  };

  return (
    <div className="craft-panel">
      <div className="inner">
        <div className="gallery">
          {craftData.sections.map((section) => {
            const columns = distributeImages(section.images);
            
            return (
              <div key={section.id} className="section">
                <h3 className="section-title">{section.title}</h3>
                <div className="masonry-grid">
                  {columns.map((column, colIndex) => (
                    <div key={colIndex} className="masonry-column">
                      {column.map((img, imgIndex) => (
                        <div
                          key={`${colIndex}-${imgIndex}`}
                          className="image-wrapper"
                          style={{
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
