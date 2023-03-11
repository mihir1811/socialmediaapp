import React, { useState } from 'react'
import { postData } from './postData'
import SinglePost from './singlePost'

const Posts = () => {
    const [posts , setPosta] = useState(postData)

  return (
    <div style={{height:"100%" ,overflowY:"scroll"}}>
        {
            posts.length > 0 && posts.map((post ,i)=>{
                return <div key={i}>
                    {console.log(post)}
                    <SinglePost post={post} />
                </div>  
            })
        }
    </div>
  )
}

export default Posts