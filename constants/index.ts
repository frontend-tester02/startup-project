import { ResumeIcon } from '@radix-ui/react-icons'
import { Contact2, FileCode2, Home, ListCollapse } from 'lucide-react'

export const navLinks = [
	{ name: 'Home', route: '/', icon: Home },
	{ name: 'About', route: '/about', icon: ListCollapse },
	{ name: 'Works', route: '/works', icon: FileCode2 },
	{ name: 'Contact', route: '/contact', icon: Contact2 },
	{ name: 'Resume', route: '/resume', icon: ResumeIcon },
]

export const techStack = [
	{
		title: 'ReactJS',
		image: '/assets/react.svg',
	},
	{
		title: 'TypeScript',
		image: '/assets/typescript.svg',
	},
	{
		title: 'JavaScript',
		image: '/assets/javascript.svg',
	},
	{
		title: 'TailwindCss',
		image: '/assets/tailwind.svg',
	},
	{
		title: 'NodeJs',
		image: '/assets/node.svg',
	},
]
