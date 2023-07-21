import React from 'react'
import Container from '../Container'
import { PostDesign } from '../importer'

const RecentBlogPost = ({data}:any) => {
     return (
          <Container>
               <h3 className='heading'>Recent blog posts</h3>
               <div className='grid lg:grid-cols-2 mt-5 gap-6'>
                    <div>
                         <PostDesign data={data[0]} />
                    </div>
                    <div className='grid gap-6'>
                         {
                              data.slice(1,3)?.map((item:any,idx:number)=>{
                                   return(
                                        <PostDesign key={idx} layout='2' data={item} />
                                   )
                              })
                         }
                    </div>
               </div>
          </Container>
     )
}

export default RecentBlogPost


