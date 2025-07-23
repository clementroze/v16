import { ReactNode } from "react";

export type PolaroidData = {
	size: "wide" | "default";
	image: string;
	alt: string;
	text?: ReactNode;
	angle: number;
	offsetX: number;
	offsetY: number;
	zIndex?: number;
	marginBottom?: number;
};

export type Activity = {
	logo: string;
	alt: string;
	title: string;
	subheading: string;
	polaroids: PolaroidData[];
};

const activities: Activity[] = [
	{
		logo: "/activities/dcc/logo.png",
		alt: "DCC logo",
		title: "Design Consulting at Cornell",
		subheading: "The Ivy League’s only student-run design consultancy.",
		polaroids: [
			{
				size: "wide",
				image: "/activities/dcc/1.png",
				alt: "DCC members posing at the Work & Co office during the Spring 2025 NYC Career Trek",
				angle: -1,
				offsetX: 0,
				offsetY: 0,
			},
			{
				size: "default",
				image: "/activities/dcc/2.png",
				alt: "Microsoft x DCC team at their Final Showcase presentation",
				angle: 2,
				offsetX: 170,
				offsetY: -50,
				zIndex: 2,
				text: (
					<p>
						<span className="font-semibold">Project Manager.</span> For
						the second semester, I’m a Project Manager where I lead a team
						of Consultants on semester-long projects with clients.
					</p>
				),
			},
			{
				size: "default",
				image: "/activities/dcc/3.png",
				alt: "DCC New Member Education class of fall 2024 posing in front of a blackboard",
				angle: -2,
				offsetX: -40,
				offsetY: -120,
				text: (
					<p>
						<span className="font-semibold">Design Instructor.</span> I’m
						teaching DCC’s Class of Fall 2026! We’re revamping the
						curriculum, updating assignments, and introducing new topics
						like accessibility and design systems.
					</p>
				),
			},
		],
	},
	{
		logo: "/activities/dti/logo.png",
		alt: "DTI logo",
		title: "Digital Tech & Innovation",
		subheading: "Cornell’s largest software development project team.",
		polaroids: [
			{
				size: "wide",
				image: "/activities/dti/1.png",
				alt: "DTI team wearing DTI-branded merch posing in front of Duffield hall",
				angle: -1,
				offsetX: 0,
				offsetY: 0,
			},
			{
				size: "default",
				image: "/activities/dti/2.png",
				alt: "DTI members brainstorming with sticky notes and markers on a whiteboard",
				angle: -2,
				offsetX: 70,
				offsetY: -50,
				text: (
					<p>
						<span className="font-semibold">Designer & Developer.</span>{" "}
						I’m on the Design team, but I’ve also contributed code to
						DTI’s projects. I help in both design critiques and reviewing
						pull requests.
					</p>
				),
			},
			{
				size: "default",
				image: "/activities/dti/3.png",
				alt: "The new DTI website's landing page",
				angle: 2,
				offsetX: 300,
				offsetY: -90,
				marginBottom: 30,
				text: (
					<p>
						<span className="font-semibold">DTI website revamp.</span> For
						Fall 2026, we’re launching a newly redesigned website to
						showcase our team and projects. It’s rebuilt from the ground
						up with accessibility, open source design, and delightful
						animations in mind!
					</p>
				),
			},
		],
	},
	{
		logo: "/activities/cuxd/logo.png",
		alt: "CUXD logo",
		title: "Cornell User Experience Design club",
		subheading:
			"Cornell’s community for UX designers to connect, learn, and grow together.",
		polaroids: [
			{
				size: "default",
				image: "/activities/cuxd/1.png",
				alt: "9 articles written for the CU Design newsletter arranged in a grid",
				angle: -2,
				offsetX: 100,
				offsetY: -30,
				marginBottom: 70,
				text: (
					<p>
						<span className="font-semibold">CU Design.</span>{" "}
						<a href="https://cudesign.beehiiv.com/" target="_blank">
							A weekly newsletter
						</a>{" "}
						with design tips, inspiration, and resources written for the
						Cornell community.
					</p>
				),
			},
		],
	},
	{
		logo: "/activities/wvbr/logo.png",
		alt: "WVBR logo",
		title: "WVBR 93.5 FM",
		subheading:
			"Cornell’s student-run radio station, operated by the Cornell Media Guild",
		polaroids: [
			{
				size: "default",
				image: "/activities/wvbr/1.png",
				alt: "CMG's website highlighting the Guild's 90th anniversary.",
				angle: 2,
				offsetX: 40,
				offsetY: 0,
				marginBottom: 100,
				text: (
					<p>
						<span className="font-semibold">New CMG website.</span> As the
						Web Director for WVBR (a student-run radio station),
						we recently launched{" "}
						<a href="https://cornellmediaguild.org/" target="_blank">
							a new website
						</a>{" "}
						for the Guild celebrating its 90th birthday.
					</p>
				),
			},
		],
	},
];

export default activities;
