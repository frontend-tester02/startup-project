import { ChildProps } from '@/types'
import Navbar from './_components/navbar'

const Layout = ({ children }: ChildProps) => {
	return (
		<main>
			<Navbar />
			<div className='container'>{children}</div>
		</main>
	)
}

export default Layout
