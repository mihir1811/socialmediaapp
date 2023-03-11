import React from 'react'
import {IoEllipsisVerticalSharp} from "react-icons/io5"
import {BiBookmark} from "react-icons/bi"
// import{AiOutlineHeart} from"react-icons/ai"
// import {FaRegComments} from "react-icons/fa"
// import {BsSend} from "react-icons/bs"

const SinglePost = ({post}) => {
  return (
    <>
      <div className='postHeader flex justify-between items-center'>
        <div className='flex'>
          <img src={post?.profilePic} height={30} width={50} alt="profile pic" />
          <div>
            <p className='m-0 p-0 text-black'>{post?.firstName}</p>
            <p className='m-0 p-0 text-black'>{post?.lastName}</p>
          </div>
        </div>
        <div>
          <IoEllipsisVerticalSharp />
        </div>
      </div>
      <div>
        <img src={post?.postImage} width="100%" />
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex'>
          {/* <AiOutlineHeart/> */}
          {/* <FaRegComments /> */}
          {/* <BsSend/>  */}
        </div>
          <BiBookmark />
      </div>

    </>
  )
}

export default SinglePost