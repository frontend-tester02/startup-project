import Link from 'next/link'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'
import { IProjectData } from '@/app.types'
import Image from 'next/image'
import { FaArrowRightFromBracket } from 'react-icons/fa6'

function ProjectsCard(project: IProjectData) {
	return (
		<div className='my-4 flex flex-col gap-2 bg-secondary p-4 rounded-md'>
			<div className='flex items-center justify-between'>
				<h2 className='font-serif font-bold text-2xl text-left'>
					{project.title}
				</h2>
				<div className='flex items-center gap-2'>
					<Button type='button' size={'icon'} className='rounded-full' asChild>
						<Link href={project.githubLink} target='_blank'>
							<Github className='size-4' />
						</Link>
					</Button>
					<Button type='button' size={'icon'} className='rounded-full' asChild>
						<Link href={project.demoLink} target='_blank'>
							<FaArrowRightFromBracket className='size-4' />
						</Link>
					</Button>
				</div>
			</div>
			<Image
				src={project.previewImage}
				alt={project.title}
				width={500}
				height={300}
				className='mt-4 object-cover rounded-lg'
			/>
			<p className='mt-4 font-serif text-start'>{project.description}</p>

			<div className='flex  mt-4 items-center justify-between'>
				{project.tags.map(item => (
					<p key={item} className='text-blue-500'>
						#{item}
					</p>
				))}
			</div>
		</div>
	)
}

export default ProjectsCard
