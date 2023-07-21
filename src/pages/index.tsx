import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Main, PostDesign, RecentBlogPost } from '@/components/importer'
import Container from '@/components/Container'
import {Posts} from '../config/queries'
import client from '@/config/client'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function Home({AllPosts}:any) {

  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = AllPosts?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(AllPosts?.length / itemsPerPage);

  const handlePageClick = (event:any) => {
    const newOffset = (event.selected * itemsPerPage) % AllPosts?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Main />
      <RecentBlogPost data={AllPosts.slice(0,3)}/>
      <Container>
        <h3 className='heading mt-20'>All blog posts</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
          {
            currentItems.map((item: any, idx: number) => {
              return (
                <PostDesign key={idx} data={item} />
              )
            })
          }
        </div>
        <section className='border-t-[1px]  pt-10 border-gray-200 mt-12 flex justify-center w-full'>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel='< Previous'
          renderOnZeroPageCount={null}
          previousClassName="previous absolute left-2 hover:text-black"
          containerClassName="flex w-full justify-center relative items-center text-gray-400 gap-8 text-xl font-semibold pagination_wrapper"
          pageClassName="p-3"
          activeClassName="bg-red-50 text-primary px-5 rounded-md"
          nextClassName="next absolute right-2 hover:text-black"
        />
        </section>
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