import React from 'react'
import Container from '../Container'
import { PostDesign } from '../importer'

const RecentBlogPost = () => {
     return (
          <Container>
               <h3 className='heading'>Recent blog posts</h3>
               <div className='grid lg:grid-cols-2 mt-5 gap-6'>
                    <div>
                         <PostDesign data={data[0]} />
                    </div>
                    <div className='grid gap-6'>
                         {
                              data.map((item:any,idx:number)=>{
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


export const data = [
     {
          author: 'Olivia Riya',
          title: "Lorem ipsum dolor, sit",
          image: '/images/image.jpeg',
          excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum tempore repellat in quaerat necessitatibus harum doloremque labore",
          tags: [
               {
                    name: "Design"
               },
               {
                    name: "Research"
               },
               {
                    name: "Presontation"
               },
          ]

     },
     {
          author: 'Olivia Riya',
          title: "Lorem ipsum dolor, sit",
          image: '/images/image.jpeg',
          excerpt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum tempore repellat in quaerat necessitatibus harum doloremque labore",
          tags: [
               {
                    name: "Design"
               },
               {
                    name: "Research"
               },
               {
                    name: "Presontation"
               },
          ]

     }

]