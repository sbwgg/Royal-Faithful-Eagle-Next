import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navbar1 from '../components/navbar1'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Royal Faithful Eagle</title>
          <meta property="og:title" content="Page - Royal Faithful Eagle" />
        </Head>
        <Navbar1 rootClassName="navbar1-root-class-name1"></Navbar1>
        <span className="page-text">
          <span className="page-text1">Klusa Bals</span>
          <span> </span>
          <br></br>
        </span>
        <span className="page-text4">
          <span className="page-text5">Silent Voice</span>
          <br></br>
        </span>
        <div className="page-container1">
          <div className="page-container2">
            <div className="page-container3">
              <Script
                html={`<iframe width="600" height="480" src="https://d0000d.com/e/1zc71jx9gn8b" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #212121;
          }
          .page-text {
            color: rgb(255, 255, 255);
            align-self: flex-start;
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-left: var(--dl-space-space-unit);
          }
          .page-text1 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
          }
          .page-text4 {
            color: rgb(171, 171, 171);
            font-size: 20px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: var(--dl-space-space-unit);
          }
          .page-text5 {
            font-weight: bold;
          }
          .page-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .page-container2 {
            width: 599px;
          }
          .page-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Page
