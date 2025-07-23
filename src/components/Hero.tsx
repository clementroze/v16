import React from "react";
import Button from "./Button";
import { usePageContext } from "./Page";

type HeroProps = {
	children?: React.ReactNode;
	className?: string;
	heading?: string;
	subheading?: string;
};

const backgroundImageMap: Record<string, string> = {
	home: "/home/hero.png",
	about: "/about/hero.png",
	activities: "/activities/hero.png",
	studio: "/studio/hero.png",
	contact: "/contact/hero.png",
};

export default function Hero({
	children,
	className,
	heading = "",
	subheading = "",
}: HeroProps) {
	const page = usePageContext();

	const [isCopied, setIsCopied] = React.useState(false);

	const handleCopyClick = () => {
		navigator.clipboard.writeText("clementproze@gmail.com");
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

	return (
		<section
			className={`hero ${className}`}
			style={{ backgroundImage: `url(${backgroundImageMap[page]})` }}
		>
			<div className="inner">
				<h1>
					<span>{heading}</span> <span>{subheading}</span>
				</h1>

				{page === "contact" && (
					<div className="letter-wrapper">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="502"
							height="351"
							viewBox="0 0 502 351"
							fill="none"
						>
							<g clip-path="url(#clip0_3529_24679)">
								<path
									d="M474.031 89.7333L264.04 3.5341C259.976 1.86707 255.507 1 250.976 1C246.445 1 241.975 1.86707 237.912 3.5341L27.9205 89.7333C19.8701 93.0138 13.083 98.1012 8.32598 104.421C3.56892 110.74 1.03138 118.04 1 125.496V310.019C1 342.098 2.8008 350 49.6972 350H452.303C499.199 350 501 342.098 501 310.019V125.496C500.964 118.036 498.419 110.733 493.654 104.413C488.888 98.0932 482.091 93.0082 474.031 89.7333Z"
									fill="url(#paint0_linear_3529_24679)"
									stroke="black"
									stroke-opacity="0.1"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
							<defs>
								<linearGradient
									id="paint0_linear_3529_24679"
									x1="251"
									y1="1"
									x2="251"
									y2="350"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="white" />
									<stop offset="1" stop-color="#F3F3F3" />
								</linearGradient>
								<clipPath id="clip0_3529_24679">
									<rect width="502" height="351" fill="white" />
								</clipPath>
							</defs>
						</svg>

						<div className="paper">
							<div className="top">
								<h2>Connect with me :)</h2>

								<Button
									href={"mailto:clementproze@gmail.com"}
									label="Email me"
									variant={"dark"}
								/>
							</div>

							<button className="copy" onClick={handleCopyClick}>
								{isCopied ? (
									<>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="12"
											height="12"
											viewBox="0 0 12 12"
											fill="none"
											className="checkmark-icon"
										>
											<path
												d="M10 3L4.5 8.5L2 6"
												stroke="black"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>

										<span aria-label="Email copied!">Copied!</span>
									</>
								) : (
									<>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 13 12"
											fill="none"
										>
											<g clip-path="url(#clip0_3529_24690)">
												<path
													d="M10.5078 3.99902H5.50781C4.95553 3.99902 4.50781 4.44674 4.50781 4.99902V9.99902C4.50781 10.5513 4.95553 10.999 5.50781 10.999H10.5078C11.0601 10.999 11.5078 10.5513 11.5078 9.99902V4.99902C11.5078 4.44674 11.0601 3.99902 10.5078 3.99902Z"
													stroke="black"
													stroke-linecap="round"
													stroke-linejoin="round"
													className="first"
												/>
												<path
													d="M2.50781 7.99902C1.95781 7.99902 1.50781 7.54902 1.50781 6.99902V1.99902C1.50781 1.44902 1.95781 0.999023 2.50781 0.999023H7.50781C8.05781 0.999023 8.50781 1.44902 8.50781 1.99902"
													stroke="black"
													stroke-linecap="round"
													stroke-linejoin="round"
													className="second"
												/>
											</g>
										</svg>

										<span>Or copy my address</span>
									</>
								)}
							</button>
						</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="518"
							height="261"
							viewBox="0 0 518 261"
							fill="none"
							className="letter-fg"
						>
							<g clip-path="url(#clip0_3529_24682)">
								<g filter="url(#filter0_d_3529_24682)">
									<path
										d="M325.268 113.061L277.746 83.5488C272.475 80.275 265.987 78.4977 259.309 78.4977C252.63 78.4977 246.142 80.275 240.871 83.5488L193.065 113.235L15.0059 5C12.0011 7.49991 8.99642 16.9996 8.99642 21.9994L9.00914 210.993C8.70999 223.459 8.70532 233.278 17.2299 240.492C25.8753 247.979 38.2021 248.242 57.0848 247.991H460.908C479.79 248.242 492.117 247.979 500.762 240.492C509.287 233.278 509.282 223.459 508.983 210.993V21.9994C508.983 16.9996 505.979 7.49991 502.974 5L325.268 113.061Z"
										fill="url(#paint0_linear_3529_24682)"
									/>
									<path
										d="M439.488 183.994L325.268 113.061M325.268 113.061L277.746 83.5488C272.475 80.275 265.987 78.4977 259.309 78.4977C252.63 78.4977 246.142 80.275 240.871 83.5488M325.268 113.061L502.974 5C505.979 7.49991 508.983 16.9996 508.983 21.9994V210.993C509.282 224.459 509.287 233.278 500.762 240.492C492.117 247.979 480.79 248.242 460.908 247.991H57.0848C38.2021 248.242 25.8753 247.979 17.2299 240.492C8.70532 233.278 8.70999 224.459 9.00914 210.993L8.99642 21.9994C8.99642 16.9996 12.0011 7.49991 15.0059 5L193.065 113.235L240.871 83.5488M240.871 83.5488L79.1178 183.994"
										stroke="black"
										stroke-opacity="0.1"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</g>
							</g>
							<defs>
								<filter
									id="filter0_d_3529_24682"
									x="0.421875"
									y="0.5"
									width="517.148"
									height="260.048"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
								>
									<feFlood
										flood-opacity="0"
										result="BackgroundImageFix"
									/>
									<feColorMatrix
										in="SourceAlpha"
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
										result="hardAlpha"
									/>
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="4" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix
										type="matrix"
										values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
									/>
									<feBlend
										mode="normal"
										in2="BackgroundImageFix"
										result="effect1_dropShadow_3529_24682"
									/>
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="effect1_dropShadow_3529_24682"
										result="shape"
									/>
								</filter>
								<linearGradient
									id="paint0_linear_3529_24682"
									x1="259"
									y1="5"
									x2="259"
									y2="248"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="white" />
									<stop offset="1" stop-color="#F3F3F3" />
								</linearGradient>
								<clipPath id="clip0_3529_24682">
									<rect width="518" height="261" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
				)}
			</div>
			{children}
		</section>
	);
}
