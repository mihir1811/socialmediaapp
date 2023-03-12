import React, { useState } from 'react'
import { postData } from './postData'
import SinglePost from './singlePost'

const Posts = () => {
    const [posts , setPosta] = useState(postData)

  return (
    <div style={{height:"100%" ,overflowY:"scroll" }} className="max-w-[700px] mx-auto scrollbar-hide">
        {
            posts.length > 0 && posts.map((post ,i)=>{
                return <div key={i}>
                    <SinglePost post={post} />
                </div>  
            })
        }
    </div>
  )
}

export default Posts