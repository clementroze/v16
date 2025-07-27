import React from "react";
interface LogoTooltipProps {
  imageUrl: string;
  tooltipText: string;
  accent: string;
  onAccent: string;
}

const LogoTooltip: React.FC<LogoTooltipProps> = ({
  imageUrl,
  tooltipText,
  accent = "var(--light)",
  onAccent,
}) => {
  return (
    <div className="logo-tooltip">
      <img src={imageUrl} alt="" />
      <span style={{ background: accent, color: onAccent }}>{tooltipText}</span>
    </div>
  );
};

export default LogoTooltip;
