import { Link } from "react-router-dom";

type ButtonProps = {
	variant: "light" | "dark" | "light-10" | "dark-10";
	label: string;
	href: string;
	className?: string;
	disabled?: boolean;
};

export default function Button({
	variant,
	label,
	href,
	className = "",
	disabled = false,
}: ButtonProps) {
	return (
		<Link
			to={disabled ? "#" : href}
			className={`button ${variant} ${className} ${disabled ? "disabled" : ""}`}
		>
			{label}
		</Link>
	);
}
