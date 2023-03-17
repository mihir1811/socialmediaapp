import React, { useState } from 'react'
import { postData } from './postData'
import SinglePost from './singlePost'

const Posts = () => {
    const [posts , setPosta] = useState(postData)

  return (
    <div className='h-full flex'>
        <div style={{height:"100%"}} className="max-w-[700px] sm:w-[100%] mx-auto scrollbar-hide px-2">
            {
                posts.length > 0 &&  posts.map((post ,i)=>{
                    return <div key={i} className="bg-slate-200 rounded-[10px] my-2">
                        <SinglePost post={post}  />
                    </div>
                })
            }
        </div>
        <div className='w-[30%] bg-[gray] h-screen lg:block hidden'>
            <h3>Chat</h3>

        </div>
    </div>
  )
}

export default Posts