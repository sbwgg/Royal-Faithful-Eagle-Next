import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navbar1 from '../components/navbar1'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Klusa Balss</title>
          <meta
            name="description"
            content="Skaties Klusa Balss bezmaksas latviešu valodā dub vai sub."
          />
          <meta property="og:title" content="Klusa Balss" />
          <meta
            property="og:description"
            content="Skaties Klusa Balss bezmaksas latviešu valodā dub vai sub."
          />
        </Head>
        <Navbar1 rootClassName="navbar1-root-class-name1"></Navbar1>
        <div className="page-container1"></div>
        <div className="page-container2">
          <div className="page-container3"></div>
        </div>
        <div className="page-container4">
          <div className="page-container5">
            <Script
              html={`<iframe width="600" height="480" src="https://d0000d.com/e/1zc71jx9gn8b" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>`}
            ></Script>
          </div>
        </div>
        <div className="page-container6">
          <span className="page-text">
            <span className="page-text01">Klusa balss</span>
            <br></br>
          </span>
          <span className="page-text03">
            <span className="page-text04">Klusa bals</span>
            <br></br>
          </span>
          <div data-thq="thq-dropdown" className="page-thq-dropdown list-item">
            <ul data-thq="thq-dropdown-list" className="page-dropdown-list">
              <li data-thq="thq-dropdown" className="page-dropdown list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="page-dropdown-toggle"
                >
                  <span className="page-text06">Sub-menu Item</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="page-dropdown1 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="page-dropdown-toggle1"
                >
                  <span className="page-text07">Sub-menu Item</span>
                </div>
              </li>
              <li data-thq="thq-dropdown" className="page-dropdown2 list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="page-dropdown-toggle2"
                >
                  <span className="page-text08">Sub-menu Item</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="page-container7"></div>
          <div className="page-container8">
            <span className="page-text09">
              <span className="page-text10">Year: 2016</span>
              <span> :</span>
            </span>
            <span className="page-text12">
              <span className="page-text13">Type: Movie</span>
              <span> :</span>
            </span>
            <span className="page-text15">
              <span className="page-text16">Studija: Kyoto Animation</span>
              <span> :</span>
            </span>
          </div>
          <span className="page-text18">
            Skaties klusa Balss anime latviski tulkotu versiju. Ar subtitriemiem
            vai audio valodu. 
          </span>
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
          .page-container1 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .page-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page-container3 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .page-container4 {
            width: 599px;
            height: 513px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .page-container5 {
            display: contents;
          }
          .page-container6 {
            width: 100%;
            height: 691px;
            display: flex;
            align-items: flex-start;
            margin-bottom: 40px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .page-text {
            color: rgb(25, 24, 24);
            font-size: 20px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .page-text01 {
            color: #ffffff;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .page-text03 {
            color: #757575;
            font-size: 25px;
            font-style: normal;
            margin-top: var(--dl-space-space-oneandhalfunits);
            font-weight: 700;
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .page-text04 {
            font-style: normal;
            font-weight: 700;
          }
          .page-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .page-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            list-style-position: inside;
          }
          .page-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .page-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .page-dropdown-toggle:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .page-text06 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .page-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .page-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .page-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .page-text07 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .page-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .page-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .page-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .page-text08 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .page-container7 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 0px;
            display: flex;
            margin-top: 21px;
            align-items: flex-start;
            margin-bottom: 21px;
          }
          .page-container8 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .page-text09 {
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
          }
          .page-text10 {
            color: #ffffff;
            font-size: 25px;
          }
          .page-text12 {
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
          }
          .page-text13 {
            color: #ffffff;
            font-size: 25px;
          }
          .page-text15 {
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
          }
          .page-text16 {
            color: #ffffff;
            font-size: 25px;
          }
          .page-text18 {
            color: rgb(255, 255, 255);
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-twounits);
          }
          @media (max-width: 1600px) {
            .page-container4 {
              width: 604px;
              height: 460px;
            }
            .page-container7 {
              height: 0px;
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .page-text10 {
              color: #ffffff;
              font-size: 25px;
            }
          }
          @media (max-width: 1200px) {
            .page-container7 {
              height: 0px;
              border-color: #757575;
              border-style: dashed;
              border-radius: var(--dl-radius-radius-radius4);
            }
          }
          @media (max-width: 767px) {
            .page-container7 {
              border-style: dashed;
            }
          }
          @media (max-width: 479px) {
            .page-text16 {
              color: #ffffff;
              font-size: 25px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
