import { ChildProps } from '@/types'
import Navbar from './_components/navbar'

const Layout = ({ children }: ChildProps) => {
	return (
		<main>
			<Navbar />
			<main>{children}</main>
		</main>
	)
}

export default Layout
