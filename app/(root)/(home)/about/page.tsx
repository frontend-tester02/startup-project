'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../../_components/footer'

function About() {
	return (
		<>
			<div className='mx-auto flex flex-col justify-center min-h-[80vh] max-w-5xl gap-8 text-center max-md:mt-32 px-4'>
				<div className='mb-8 flex flex-col md:flex-row items-center gap-8'>
					<div className='md:w-1/3'>
						<Image
							src='/portfolio.jpg'
							alt='Your Name'
							width={300}
							height={300}
							className='rounded-full'
						/>
					</div>
					<div className='md:w-2/3 font-serif'>
						<h2 className='text-4xl font-bold mb-4'>About Me</h2>
						<p className='text-md mb-4 text-start'>
							Hello! I'm a passionate web developer with a keen eye for design
							and a love for creating intuitive, user-friendly experiences. With
							expertise in front-end and back-end technologies, I bring ideas to
							life through clean, efficient code.
						</p>
						<div className='items-start flex space-x-4'>
							<Button asChild>
								<Link href={'contacts'}>
									<Mail className='mr-2 h-4 w-4' /> Contact Me
								</Link>
							</Button>

							<Button variant='outline' asChild>
								<Link
									href={'https://github.com/frontend-tester02'}
									target='_blank'
								>
									<Github className='mr-2 h-4 w-4' /> GitHub
								</Link>
							</Button>

							<Button variant='outline' asChild>
								<Link
									href={'https://github.com/frontend-tester02'}
									target='_blank'
								>
									<Linkedin className='mr-2 h-4 w-4' /> LinkedIn
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className='mb-16 container mx-auto max-w-5xl font-serif px-4'>
				<h1 className='text-3xl font-bold mb-4'>Skills</h1>
				<div className='flex flex-wrap gap-2'>
					{[
						'JavaScript',
						'React',
						'Next.js',
						'Node.js',
						'TypeScript',
						'HTML',
						'CSS',
						'Tailwind CSS',
						'Git',
					].map(skill => (
						<Badge key={skill} variant='secondary' className='p-2'>
							{skill}
						</Badge>
					))}
				</div>
			</div>

			<div className='mb-16 container mx-auto max-w-5xl font-serif px-4'>
				<h1 className='text-3xl font-bold mb-4'>Experience</h1>
				<div className='space-y-4'>
					{[
						{
							year: '2021 - Present',
							title: 'Senior Web Developer',
							company: 'Tech Innovators Inc.',
						},
						{
							year: '2018 - 2021',
							title: 'Full Stack Developer',
							company: 'Digital Solutions Ltd.',
						},
						{
							year: '2016 - 2018',
							title: 'Junior Developer',
							company: 'StartUp Ventures',
						},
					].map((job, index) => (
						<Card key={index}>
							<CardContent className='flex items-center p-4'>
								<div className='text-primary font-semibold w-1/4'>
									{job.year}
								</div>
								<div className='w-3/4'>
									<h4 className='font-semibold'>{job.title}</h4>
									<p className='text-muted-foreground'>{job.company}</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			<div className='container mx-auto max-w-5xl font-serif px-4'>
				<h1 className='text-3xl font-bold mb-4'>Let's Connect</h1>
				<p className='mb-4'>
					I'm always open to new opportunities and collaborations. Feel free to
					reach out if you'd like to discuss a project or just say hello!
				</p>
				<Button size='lg'>
					<Mail className='mr-2 h-4 w-4' /> Get in Touch
				</Button>
			</div>

			<Footer />
		</>
	)
}

export default About
