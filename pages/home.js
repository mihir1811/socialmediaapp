import Link from 'next/link'
import React, { useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Posts from '../components/posts/Posts'
import Header from '../components/header/Header'
import Sidebar from '../components/Sidebar'

function Home() {


  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {/* <Header /> */}
      <div className='flex w-[100%]'>
        <div className='sidebar_container duration-700 2xl:w-[300px] xl:w-[300px] lg:w-[280px] md:w-[280px] sm:-[200px] xs:w-[70px] hidden md:block xl:block lg:block xs:block bg-[var(--sidebar-bg)] h-screen'>
          <Sidebar/>
        </div>
        <div className='xl:w-[80%] lg:w-[calc(100vw_-_20%)] md:w-[calc(100vw_-_60px)] xs:w-[calc(100vw_-_60px)] overflow-y-auto h-screen'>
          <Posts />
        </div>
        {/* <Link href="/contact"> contact</Link> */}
      </div>
    </>
  )
}

export default Home