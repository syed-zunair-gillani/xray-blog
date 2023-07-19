import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Main, PostDesign, RecentBlogPost } from '@/components/importer'
import Container from '@/components/Container'
import { data } from '@/components/recent-blog-post/RecentBlogPost'
import {Posts} from '../config/queries'
import client from '@/config/client'

const inter = Inter({ subsets: ['latin'] })

export default function Home({AllPosts}:any) {
  return (
    <>
      <Main />
      <RecentBlogPost />
      <Container>
        <h3 className='heading mt-20'>All blog posts</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
          {
            data.map((item: any, idx: number) => {
              return (
                <PostDesign key={idx} data={item} />
              )
            })
          }
        </div>
      </Container>

    </>
  )
}


export async function getStaticProps() {
  const { data } = await client.query({
    query: Posts,
  })
  const AllPosts = data?.blogs

  return { props: { AllPosts } }
}