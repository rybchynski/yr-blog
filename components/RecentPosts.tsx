import Image from 'next/image'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import { Blog } from '../.contentlayer/generated/types'

interface RecentPostsPropsInterface {
  posts: Omit<Blog, '_id' | '_raw' | 'body'>[]
}

export const RecentPosts = ({ posts }: RecentPostsPropsInterface): JSX.Element => {
  return (
    <div>
      <h2 className="my-6 font-bold leading-8 text-center text-2xl">Recent posts</h2>
      {posts.map((post) => (
        <div key={post.title} className="mb-4">
          <div className="grid grid-cols-4 gap-2 items-start">
            <Image
              src={post.cover_image}
              width={180}
              height={100}
              alt={post.title}
              className="hidden sm:block"
            />
            <div className="col-span-3">
              <Link href={`/${post.path}`} className="text-gray-900 dark:text-gray-100">
                <h3 className="text-xl font-bold leading-8 tracking-tigh">{post.title}</h3>
              </Link>
              {post.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                {post.summary}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
