import ProjectsCard from '@/components/cards/projects.card'
import TopBar from '@/components/shared/tob-bar'
import { projectData } from '@/constants'

function Page() {
	return (
		<>
			<TopBar label='Projects' />
			<div className='mx-auto flex flex-col max-w-5xl gap-8 text-center max-md:mt-32'>
				<div className='mt-8'>
					<h1 className=' mb-2 font-serif text-3xl font-bold text-start'>
						Projects<span className='text-blue-500'>.</span>
					</h1>
					<div className='mt-4 grid grid-cols-2 gap-4'>
						{projectData.map(item => (
							<ProjectsCard key={item.title} {...item} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
