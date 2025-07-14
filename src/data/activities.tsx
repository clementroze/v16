import { ReactNode } from "react";

export type PolaroidData = {
	size: "wide" | "default";
	image: string;
	alt: string;
	text?: ReactNode;
	angle: number;
	offsetX: number;
	offsetY: number;
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
		logo: "/images/activities/logo-dti.png",
		alt: "DTI logo",
		title: "Design Consulting at Cornell",
		subheading: "The Ivy League’s only student-run design consultancy.",
		polaroids: [
			{
				size: "wide",
				image: "/activities/dcc/1.png",
				alt: "Students collaborating during a DTI hackathon",
				angle: 1,
				offsetX: 0,
				offsetY: 0,
			},
			{
				size: "default",
				image: "/activities/dcc/2.png",
				alt: "Workshop scene",
				angle: -2,
				offsetX: 0,
				offsetY: 0,
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
				alt: "Retreat setting",
				angle: 2,
				offsetX: 0,
				offsetY: 0,
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
		logo: "/images/activities/logo-hci.png",
		alt: "HCI logo",
		title: "Digital Tech & Innovation",
		subheading: "Cornell’s largest software development project team.",
		polaroids: [
			{
				size: "wide",
				image: "/activities/dti/1.png",
				alt: "Team research",
				angle: -1,
				offsetX: 0,
				offsetY: 0,
			},
			{
				size: "default",
				image: "/activities/dti/2.png",
				alt: "Design/development contribution",
				angle: -2,
				offsetX: 0,
				offsetY: 0,
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
				alt: "Website revamp",
				angle: 2,
				offsetX: 0,
				offsetY: 0,
				text: (
					<p>
						<span className="font-semibold">DTI Website Revamp.</span> For
						Fall 2026, we’re launching a newly redesigned website to
						showcase our team and projects. It’s rebuilt from the ground
						up with accessibility, open source design, and delightful
						animations in mind!
					</p>
				),
			},
		],
	},
];

export default activities;
