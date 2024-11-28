import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Hero() {
	return (
		<>
			<div className='mx-auto flex justify-center min-h-screen max-w-6xl gap-8 text-center max-md:mt-32'>
				<div className='w-[500px] flex flex-col space-y-4 self-center'>
					<h1 className='font-serif text-3xl font-bold'>
						I am Nuriddinov Shokhrukh
					</h1>
					<p className='text-muted-foreground'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Repudiandae quam minima, earum atque ipsam quo ipsum voluptates ab
						ut, fuga debitis similique.
					</p>
					<div className='flex justify-center gap-4'>
						<Link href={'/courses'}>
							<Button variant={'outline'} size={'lg'} className='rounded-full'>
								Contact me
							</Button>
						</Link>
						<Link href={'/blogs'}>
							<Button size={'lg'} className='rounded-full'>
								Projects
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
