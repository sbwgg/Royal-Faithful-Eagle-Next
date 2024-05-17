import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar1 from '../components/navbar1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Royal Faithful Eagle</title>
          <meta property="og:title" content="Royal Faithful Eagle" />
        </Head>
        <Navbar1 rootClassName="navbar1-root-class-name"></Navbar1>
        <h1 className="home-text">Animee.lv</h1>
        <Link href="/list">
          <a className="home-link button">Button</a>
        </Link>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #212121;
          }
          .home-text {
            color: rgb(255, 255, 255);
            width: 156px;
            height: 46px;
            margin-top: var(--dl-space-space-twounits);
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-link {
            width: 128px;
            height: 46px;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: #9c9c9c;
          }
        `}
      </style>
    </>
  )
}

export default Home
