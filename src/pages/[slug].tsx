import Container from '@/components/Container'
import client from '@/config/client'
import { Posts, post } from '@/config/queries'
import { GetStaticPaths } from 'next'
import Link from 'next/link'
import React from 'react'
import dateFormat from 'dateformat';
import Image from 'next/image'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { PostDesign } from '@/components/importer'


const Slug = ({ singlePost, AllPosts }: any) => {
     console.log("🚀 ~ file: [slug].tsx:10 ~ Slug ~ singlePost:", singlePost)

     return (
          <>
               <Container>
                    <main className='my-12 md:my-20'>
                         <p className='text-center text-lg font-semibold text-primary '>Published {dateFormat((singlePost?._createdAt), "d mmm yyyy")}</p>
                         <h1 className='mt-3 font-roboto text-3xl md:text-4xl text-center text-gray-800 font-medium'>{singlePost?.title}</h1>
                         <p className='max-w-[950px] text-center mx-auto mt-3 text-[#7c7c7c] font-roboto text-lg font-normal'>{singlePost?.excerpt}</p>
                         <ul className='flex item-center max-w-[750px] mx-auto justify-center mt-5 flex-wrap gap-4'>
                              {
                                   singlePost?.tags.map((item: any, idx: number) => (
                                        <li key={idx} className={`text-primary bg-[#fdf2fa] p-1 px-3 rounded-full capitalize ${idx === 1 && 'bg-[#eef4ff]'} ${idx === 3 && 'bg-[##f8f9fc]'}`}>{item}</li>
                                   ))
                              }
                         </ul>
                    </main>
                    <Image src={singlePost?.featureImage?.url} alt={singlePost?.title} width={1000} height={1000} className='w-full h-[550px] object-cover' />
                    <section className="content max-w-[900px] px-2 my-10 mx-auto">
                         <div dangerouslySetInnerHTML={{ __html: singlePost?.content?.html }} />
                    </section>
                    {/* author  */}
                    <section className='max-w-[900px] px-2 my-10 mx-auto flex justify-between items-center border-t-[1px] pt-7 border-gray-200'>
                         <div className='flex items-center gap-2 '>
                              <Image src={singlePost?.author?.profileImage?.url} alt={singlePost?.author?.name} width={200} height={200} className='w-20 rounded-full h-20 object-cover' />
                              <div>
                                   <h6 className='font-medium font-roboto text-xl'>{singlePost?.author?.name}</h6>
                                   <p className='text-gray-400 text-lg'>{singlePost?.author?.designation}</p>
                              </div>
                         </div>
                         <div className='flex justify-between items-center gap-4 text-2xl '>
                              <Link href={singlePost?.author?.twitterUrl} className='border border-gray-300 text-gray-300 p-2 hover:border-black hover:text-black rounded-lg' target="_blank"><BsTwitter /></Link>
                              <Link href={singlePost?.author?.linkedinurl} className='border border-gray-300 text-gray-300 p-2 hover:border-black hover:text-black rounded-lg' target="_blank"><FaLinkedinIn /></Link>
                              <Link href={singlePost?.author?.facebookUrl} className='border border-gray-300 text-gray-300 p-2 hover:border-black hover:text-black rounded-lg' target="_blank"><FaFacebookF /></Link>
                         </div>
                    </section>
                    <section className='border-t-[1px] pt-10 border-gray-200 mb-10'>
                         <h2 className='mt-3 font-roboto text-3xl md:text-4xl text-gray-800 font-medium'>From the blog</h2>
                         <p className=' mt-3 text-[#7c7c7c] font-roboto text-lg font-normal'>The latest industry news, interviews, technologies, and resources.</p>
                         <div className='grid md:grid-cols-2 gap-6 mt-12'>
                              {
                                   AllPosts?.slice(0, 4)?.map((item: any, idx: number) => {
                                        return (
                                             <PostDesign key={idx} layout='3' data={item} />
                                        )
                                   })
                              }
                         </div>
                    </section>
                    <section className='border-t-[1px] pt-10 border-gray-200 flex justify-end items-end'>
                         <Link href='/blogs' className='bg-primary px-8 py-3 text-white rounded-lg hover:scale-105'>View all posts</Link>
                    </section>
               </Container>
          </>
     )
}

export default Slug


export async function getStaticProps({ params }: any) {
     const { data } = await client.query({
          query: post,
          variables: {
               slug: params.slug,
          },
     });
     const AllPostsResponce = await client.query({
          query: Posts,
     })

     const AllPosts = AllPostsResponce?.data?.blogs
     const singlePost = data?.blog
     return {
          props: {
               singlePost,
               AllPosts
          },
     };
}

export const getStaticPaths: GetStaticPaths = async () => {
     const paths: any = [];
     return {
          paths,
          fallback: 'blocking',
     };
}
