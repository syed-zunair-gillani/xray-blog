import Container from '@/components/Container'
import { PostDesign } from '@/components/importer'
import client from '@/config/client'
import { Posts } from '@/config/queries'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Blogs = ({ AllPosts }: any) => {
     const itemsPerPage = 9;
     const [itemOffset, setItemOffset] = useState(0);
     const endOffset = itemOffset + itemsPerPage;
     const currentItems = AllPosts?.slice(itemOffset, endOffset);
     const pageCount = Math.ceil(AllPosts?.length / itemsPerPage);

     const handlePageClick = (event: any) => {
          const newOffset = (event.selected * itemsPerPage) % AllPosts?.length;
          setItemOffset(newOffset);
     };

     return (
          <>
               <main className='my-12 md:my-20'>
                    <Container>
                         <p className='text-center text-lg font-semibold text-primary '>Out blog</p>
                         <h1 className='mt-3 font-roboto text-3xl md:text-4xl text-center text-gray-800 font-medium'>Our Blogs List</h1>
                         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24'>
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
               </main>
          </>
     )
}

export default Blogs




export async function getStaticProps() {
     const { data } = await client.query({
          query: Posts,
     })
     const AllPosts = data?.blogs

     return { props: { AllPosts } }
}