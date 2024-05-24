import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar1 from '../components/navbar1'

const List = (props) => {
  return (
    <>
      <div className="list-container">
        <Head>
          <title>List - Royal Faithful Eagle</title>
          <meta property="og:title" content="List - Royal Faithful Eagle" />
        </Head>
        <Navbar1 rootClassName="navbar1-root-class-name2"></Navbar1>
        <span className="list-text">Anime</span>
        <div className="list-container1">
          <div className="list-container2">
            <Link href="/1-silent-voice">
              <a className="list-link">
                <li className="list-li list-item">
                  <div className="list-container3">
                    <span className="list-text1">Dub</span>
                  </div>
                  <span className="list-text2">Klusa Bals</span>
                </li>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .list-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #212121;
          }
          .list-text {
            color: #ffffff;
            font-size: 25px;
            align-self: flex-start;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 700;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-unit);
          }
          .list-container1 {
            flex: 0 0 auto;
            width: 1573px;
            height: 568px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .list-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .list-link {
            display: contents;
          }
          .list-li {
            width: 137px;
            height: 271px;
            text-decoration: none;
          }
          .list-container3 {
            width: 154px;
            height: 220px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-halfunit);
            background-size: cover;
            justify-content: center;
            background-image: url('https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg');
            background-position: center;
          }
          .list-text1 {
            color: #ffffff;
            padding: 4px;
            font-style: normal;
            margin-top: 200px;
            font-weight: 700;
            margin-left: 115px;
            padding-top: var(--dl-space-space-halfunit);
            margin-right: 0px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #d00000;
          }
          .list-text2 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
            padding-top: var(--dl-space-space-halfunit);
          }
          @media (max-width: 1600px) {
            .list-container1 {
              width: 1557px;
              align-self: center;
            }
            .list-container2 {
              width: 100%;
              align-self: center;
              justify-content: center;
            }
            .list-li {
              width: 174px;
              margin-left: var(--dl-space-space-oneandhalfunits);
            }
            .list-text1 {
              padding: 4px;
              margin-left: 115px;
              border-radius: var(--dl-radius-radius-radius4);
            }
          }
          @media (max-width: 1200px) {
            .list-container1 {
              width: 1168px;
              margin-left: 20px;
            }
            .list-text1 {
              padding: 4px;
              margin-left: 115px;
              border-color: var(--dl-color-theme-neutral-dark);
              border-width: 1px;
              border-radius: var(--dl-radius-radius-radius4);
            }
          }
          @media (max-width: 991px) {
            .list-container1 {
              width: 950px;
            }
          }
          @media (max-width: 767px) {
            .list-container1 {
              width: 740px;
            }
          }
          @media (max-width: 479px) {
            .list-container1 {
              width: 436px;
            }
          }
        `}
      </style>
    </>
  )
}

export default List
