import { Link } from "react-router-dom";

type ButtonProps = {
	variant: "light" | "dark" | "light-10" | "dark-10";
	label: string;
	href: string;
	className?: string;
};

export default function Button({
	variant,
	label,
	href,
	className = "",
}: ButtonProps) {
	return (
		<Link to={href} className={`button ${variant} ${className}`}>
			{label}
		</Link>
	);
}
