import React from 'react'
import {IoEllipsisVerticalSharp} from "react-icons/io5"
import {BiBookmark} from "react-icons/bi"
import { HeartOutlinedIcon } from '../../lib/config'
import{AiOutlineHeart} from"react-icons/ai"
import {FaRegComments} from "react-icons/fa"
import Image from 'next/image'

const SinglePost = ({post}) => {
  return (
    <>
      <div className='postHeader flex justify-between items-center py-2 px-3'>
        <div className='flex items-center'>
          <Image
            src={post?.profilePic}
            alt="profile pic"
            width={50}
            height={50}
            style={{borderRadius:"50%" }}
            className="h-[50px] w-[50px]"
          />
          <div>
            <p className='m-0 p-0 pl-2 text-black'>{post?.firstName} {post?.lastName}</p>
          </div>
        </div>
        <div>
          <IoEllipsisVerticalSharp className='fntSz25' />
        </div>
      </div>
      <div className='relative w-full postImageContainer'>
        {/* <Image
          src={post?.postImage}
          layout="fill"
          objectFit="cover"
          alt="profile pic"
          fill
        /> */}
        <img src={post?.postImage} alt="profile pic" />
      </div>
      <div className='flex justify-between items-center py-2 px-3'> 
        <div className='flex'>
          <AiOutlineHeart className='fntSz25 mx-1' />
          <FaRegComments className='fntSz25 mx-1' />
        </div>
          <BiBookmark className='fntSz25' /> 
      </div>
      <hr />
      <style jsx>
        {`
          .postImageContainer >img{
            position:relative !important
          }
        `}
      </style>
    </>
  )
}

export default SinglePost