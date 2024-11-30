import { getReadingTime } from '@/lib/utils'
import { getDetailedBlog } from '@/service/blog.service'
import { format } from 'date-fns'
import { ArrowRight, CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
import { Separator } from '@/components/ui/separator'
import ShareBtns from './_components/share-btns'
import { Footer } from '@/app/(root)/_components/footer'

async function Page({ params }: { params: { slug: string } }) {
	const blog = await getDetailedBlog(params.slug)
	return (
		<>
			<div className='container mx-auto max-w-4xl pt-[15vh]'>
				<h1 className='font-serif text-4xl font-bold md:text-5xl lg:text-6xl'>
					{blog.title}
				</h1>

				<div className='mt-4 flex flex-wrap items-center gap-4 max-md:justify-center'>
					<div className='flex items-center gap-2'>
						<Image
							src={blog.author.image.url}
							alt='author'
							width={30}
							height={30}
							className='rounded-md object-cover'
						/>
						<p>by {blog.author.name}</p>
					</div>
					<Minus />
					<div className='flex items-center gap-2'>
						<Clock className='size-5' />
						<p>{getReadingTime(blog.content.html)} min read</p>
					</div>
					<Minus />
					<div className='flex items-center gap-2'>
						<CalendarDays className='size-5' />
						<p>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</p>
					</div>
				</div>

				<Image
					src={blog.image.url}
					alt='blog'
					width={'1120'}
					height={'595'}
					className='mt-4 rounded-md'
				/>

				<div className='relative mt-12 flex max-md:flex-col-reverse md:gap-12'>
					<div className='flex flex-col space-y-3'>
						<div className='sticky top-36'>
							<p className='text-lg uppercase text-muted-foreground'>Share</p>
							<ShareBtns />
						</div>
					</div>
					<div className='prose flex-1 dark:prose-invert'>
						{parse(blog.content.html)}
					</div>
				</div>

				<Separator className='my-3' />
				<div className='mt-6 flex items-center gap-6 max-md:flex-col'>
					<Image
						src={blog.author.image.url}
						alt='author'
						width={'155'}
						height={'155'}
						className='rounded-md max-md:self-start'
					/>
					<div className='flex flex-1 flex-col space-y-4'>
						<h2 className='font-spaceGrotesk text-3xl'>{blog.author.name}</h2>
						<p className='line-clamp-2 text-muted-foreground'>
							{blog.author.bio}
						</p>
						<Link
							href={`/author/${blog.author.id}`}
							className='flex items-center gap-2 underline transition-colors hover:text-blue-500'
						>
							<span>See all posts by this author</span>
							<ArrowRight />
						</Link>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default Page