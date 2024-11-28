'use client'
import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
	const pathname = usePathname()
	return (
		<div className='h-[10vh] fixed backdrop-blur-sm border-b inset-0 bg-background z-40'>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
				{/* LOGO */}
				<Link href={'/'}>
					<h1 className='text-4xl'>shokh.dev</h1>
				</Link>
				<div className='gap-2 md:flex hidden'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-md transition-colors',
								pathname === nav.route && 'text-blue-400'
							)}
						>
							{nav.name}
						</Link>
					))}
				</div>
				<ModeToggle />
			</div>
		</div>
	)
}

export default Navbar
