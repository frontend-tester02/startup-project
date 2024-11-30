import ProjectsCard from '@/components/cards/projects.card'
import TopBar from '@/components/shared/tob-bar'
import { projectData } from '@/constants'
import { Footer } from '../../_components/footer'

function Page() {
	return (
		<>
			<TopBar
				label='Projects'
				description='Here you can see my best projects.'
			/>
			<div className='mx-auto flex flex-col max-w-5xl gap-8 text-center max-md:mt-32'>
				<div className='mt-4 grid grid-cols-2 gap-4'>
					{projectData.map(item => (
						<ProjectsCard key={item.title} {...item} />
					))}
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Page
