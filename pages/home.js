import Link from 'next/link'
import React, { useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Posts from '../components/posts/Posts'
import Header from '../components/header/Header'

function Home() {


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {/* <Header /> */}
      <div className='flex w-[100%]'>
        <div className='xl:w-[23%] md:w-[60px] bg-slate-200 h-screen'></div>
        <div className='xl:w-[77%] md:w-[100%]  h-screen'>
          <Posts />
        </div>
        {/* <Link href="/contact"> contact</Link> */}
      </div>
    </>
  )
}

export default Home