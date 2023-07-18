import Image from 'next/image'
import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu';
import { GetWordStr } from '../../utils'

interface IPostDesing {
     layout?: string
     data: any
}
const currentDate = new Date();
const formattedDate = new Intl.DateTimeFormat('en-US', {
     year: 'numeric',
     month: 'long',
     day: 'numeric'
}).format(currentDate);


const PostDesign = ({ layout, data }: IPostDesing) => {
     const w = layout === '2' ? 10 : 20
     return (
          <article className={`group ${layout === '2' && 'md:flex gap-5'}`} >
               <figure className={`overflow-hidden ${layout === '2' ? 'md:max-w-[50%] w-full' : 'w-full h-[300px]'}`}>          <img src={data.image} alt={data.title} className={`h-full w-full transition-all duration-300 ease-in-out object-cover group-hover:scale-105`} />
               </figure>
               <div className={layout === '2' ? 'max-w-[50%] w-full' : 'w-full'}>
                    <p className='mt-1 text-primary font-semibold'><span>{data.author}</span> <span className='text-2xl'>.</span> {formattedDate} </p>
                    <div className='flex my-1 items-center justify-between '>
                         <h4 className='heading my-1'>{data.title}</h4>
                         {layout !== '2' && <LuArrowUpRight size={22} />}
                    </div>
                    <p className='text-gray-500 font-roboto text-lg font-light'>{GetWordStr(data?.excerpt, w)}</p>
                    <ul className='mt-3 flex item-center sm:flex-wrap xl:flex-nowrap gap-2'>
                         {
                              data?.tags.slice(0, 3).map((item: any, idx: number) => (
                                   <li key={idx} className={`text-primary bg-[#fdf2fa] p-1 px-3 rounded-full capitalize ${idx === 1 && 'bg-[#eef4ff]'} ${idx === 3 && 'bg-[##f8f9fc]'}`}>{item.name}</li>
                              ))
                         }
                    </ul>
               </div>
          </article>
     )
}

export default PostDesign