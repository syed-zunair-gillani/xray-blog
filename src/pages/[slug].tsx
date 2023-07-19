import Container from '@/components/Container'
import client from '@/config/client'
import { post } from '@/config/queries'
import { GetStaticPaths } from 'next'
import Link from 'next/link'
import React from 'react'
import dateFormat from 'dateformat';
import Image from 'next/image'

const Slug = ({ singlePost }: any) => {
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
                    <Image src={singlePost?.featureImage?.url} alt={singlePost?.title} width={1000} height={1000} className='w-full h-[550px] object-cover'/>
                    <section className="content max-w-[900px] px-2 my-10 mx-auto">
                         <div       dangerouslySetInnerHTML={{__html: singlePost?.content?.html}} />
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
     const singlePost = data?.blog
     return {
          props: {
               singlePost,
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
