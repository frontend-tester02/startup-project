import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'

function Hero() {
	return (
		<>
			<div className='mx-auto flex justify-center min-h-screen max-w-5xl gap-8 text-center max-md:mt-32'>
				<div className='w-[700px] flex flex-col space-y-4 self-center'>
					<h1 className='font-serif text-3xl font-bold'>
						I am <span className='text-blue-500'>Nuriddinov Shokhrukh</span>
					</h1>
					<p className='text-muted-foreground'>
						I solve problems and create captivating applications.
					</p>
					<p className='text-muted-foreground'>
						I am a{' '}
						<span className='text-blue-500'>Full Stack Web Developer</span>{' '}
						based in Seoul, South Korea, deriving immense satisfaction from
						solving intricate problems through the art of coding!
					</p>
					<div className='flex justify-center items-center gap-8'>
						<Button type='button' size={'icon'} className='rounded-full'>
							<Link href={'https://github.com/frontend-tester02'}>
								<Github />
							</Link>
						</Button>
						<Button type='button' size={'icon'} className='rounded-full'>
							<Link href={'https://github.com/frontend-tester02'}>
								<Linkedin />
							</Link>
						</Button>
						<Button type='button' size={'icon'} className='rounded-full'>
							<Link href={'https://github.com/frontend-tester02'}>
								<MdEmail />
							</Link>
						</Button>
					</div>
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
