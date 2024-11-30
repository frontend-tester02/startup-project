'use client'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { GitlabIcon as GitHub, Mail, MapPin, PhoneCall } from 'lucide-react'

export function Footer() {
	return (
		<div className='mt-12 pt-2 bg-secondary'>
			<div className='container mx-auto px-4 py-8 max-w-5xl'>
				{/* <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div className='col-span-2 space-y-4'>
						<h2 className='text-2xl font-bold'>shoky.dev</h2>
						<p className='text-muted-foreground'>
							A passionate web developer creating intuitive and efficient
							digital solutions.
						</p>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Pages</h3>
						<ul className='space-y-2'>
							<li>
								<Link href='/' className='hover:text-primary'>
									Home
								</Link>
							</li>
							<li>
								<Link href='/about' className='hover:text-primary'>
									About
								</Link>
							</li>
							<li>
								<Link href='/projects' className='hover:text-primary'>
									Projects
								</Link>
							</li>
							<li>
								<Link href='/contact' className='hover:text-primary'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='text-lg font-semibold mb-4'>Contacts</h3>
						<div className='flex flex-col space-y-3 pt-6'>
							<div className='flex items-center space-x-3'>
								<PhoneCall size={20} />
								<div className='flex flex-col space-y-1'>
									<a
										href='tel:+821021154633'
										className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
									>
										+82 10 2115 4633
									</a>
									<Separator className='dark:bg-gray-500' />
									<a
										href='tel:+998990869744'
										className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
									>
										+998 99 086-97-44
									</a>
								</div>
							</div>

							<div className='flex items-center space-x-3'>
								<Mail size={20} />
								<a
									href='shokhrukhnuriddinov@gmail.com'
									className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
								>
									shokhrukhnuriddinov@gmail.com
								</a>
							</div>

							<div className='flex items-center space-x-3'>
								<MapPin size={20} />
								<span className='text-sm'>Seoul, South Korea</span>
							</div>
						</div>
					</div>
				</div> */}
				{/* <Separator className='my-8 dark:bg-gray-500' /> */}
				<div className='flex justify-center items-center'>
					<p className='text-sm text-muted-foreground'>
						© {new Date().getFullYear()}{' '}
						<Link
							href={'/'}
							className='text-blue-500 hover:underline cursor-pointer'
						>
							shoky.dev
						</Link>
						. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	)
}
