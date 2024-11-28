import { techStack } from '@/constants'
import Image from 'next/image'

function AboutMe() {
	return (
		<>
			<div className='mx-auto flex flex-col justify-center max-w-6xl gap-8 text-center max-md:mt-32'>
				<div className='w-[700px] flex flex-col space-y-4 self-center'>
					<h1 className='font-serif text-3xl font-bold'>
						About Me<span className='text-blue-500'>.</span>
					</h1>
					<p className='text-muted-foreground'>
						Hello there! I am Shokhrukh, and I am in the process of making a
						significant career transition from retail to the thriving world of
						technology. I have honed a keen knack for problem-solving and an
						insatiable thirst for learning.
					</p>
					<p className='text-muted-foreground'>
						My expertise lies in full-stack development, with a strong
						proficiency in technologies like React and Node. I firmly believe in
						selecting the most suitable tools for each unique task. Presently, I
						am channeling my skills and enthusiasm as a teaching assistant at
						BrainStation, where I find myself immersed in a myriad of
						exhilarating challenges.
					</p>
					<p className='text-muted-foreground'>
						Beyond the world of coding, I relish the opportunity to explore
						Tashkent picturesque landscapes alongside my wife. If you happen to
						cross paths with me on a Sunday, chances are I will be savoring a
						delightful bubble tea 🧋.
					</p>
					<p className='text-muted-foreground'>
						Feel free to connect with me on LinkedIn if you would like to delve
						deeper into any topic or simply share a friendly chat. 🤝
					</p>
				</div>

				<div className='w-full flex flex-col'>
					<h1 className=' mb-2 font-serif text-3xl font-bold text-start'>
						Tech Stack<span className='text-blue-500'>.</span>
					</h1>
					<div className='flex items-center flex-wrap gap-6 space-y-2 space-x-6'>
						{techStack.map(item => (
							<div key={item.title}>
								<Image
									src={item.image}
									alt={item.title}
									width={70}
									height={70}
									className='rounded-md object-cover'
								/>
								<h3 className='mt-4 font-bold items-center'>{item.title}</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutMe
