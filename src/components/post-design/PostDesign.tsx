import Image from 'next/image'
import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu';
import { GetWordStr } from '../../utils'
import Link from 'next/link';


interface IPostDesing {
     layout?: string
     data: any
}


const PostDesign = ({ layout, data }: IPostDesing) => {
     const w = layout === '2' ? 10 : 20
     const { author, excerpt, title, tags, createdAt, slug, featureImage } = data

     function DateF(d: any) {
          const originalDate = new Date(d);
          const formattedDate = originalDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
          return formattedDate
     }

     return (
          <article className={`group ${layout === '2' && 'md:grid md:grid-cols-2 gap-5'}`} >
               
               <Link href={`/${slug}`}>
                    <figure className={`overflow-hidden relative ${layout === '2' ? ' w-full md:h-full' : 'w-full h-[300px]'}`}>
                         <img src={featureImage?.url} alt={title} className={`h-full w-full transition-all duration-300 ease-in-out object-cover group-hover:scale-105`} />
                         {layout === '3' && <>
                              <div className='absolute bottom-0 h-20 bg-gray-300/90 w-full p-4 blur-[2px] scale-110' />
                              <div className=' text-primary text-white flex justify-between items-center w-full pr-12 absolute bottom-0 p-4 left-5 font-semibold'>
                                   <div>
                                        <p>{author?.name}</p>
                                        <p>{DateF(createdAt)}</p>
                                   </div>
                                   <p>{tags[0]}</p>
                              </div>
                         </>
                         }
                    </figure>
               </Link>
             
               <div className={'w-full'}>
                    {layout !== '3' && <p className='mt-1 text-primary font-semibold'><span>{author?.name}</span> <span className='text-2xl'>.</span> {DateF(createdAt)} </p>}
                    <div className='flex my-1 items-center justify-between '>
                         <Link href={slug}><h4 className={`heading my-1 ${layout === '3' && 'pt-6 text-2xl'}`}>{data.title}</h4></Link>
                         {layout !== '2' && layout !== '3' && <LuArrowUpRight size={22} />}
                    </div>
                    <p className='text-gray-500 font-roboto text-lg font-light'>{GetWordStr(excerpt, w)}</p>
                    <ul className='mt-3 flex item-center sm:flex-wrap xl:flex-nowrap gap-2'>
                         {layout !== '3' &&
                              tags?.slice(0, layout === '2' ? 2 : 3).map((item: any, idx: number) => (
                                   <li key={idx} className={`text-primary bg-[#fdf2fa] p-1 px-3 rounded-full capitalize ${idx === 1 && 'bg-[#eef4ff]'} ${idx === 3 && 'bg-[##f8f9fc]'}`}>{item}</li>
                              ))
                         }
                    </ul>
               </div>
               {layout === '3' && <Link href={`/${slug}`} className='text-primary flex items-center font-semibold gap-2 hover:text-black'>Read Post <LuArrowUpRight size={22} /></Link>}
          </article>
     )
}

export default PostDesign