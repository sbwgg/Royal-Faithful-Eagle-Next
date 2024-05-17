import React from 'react'

import Navbar1 from './navbar1'

const NavBar = (props) => {
  return (
    <>
      <div className="nav-bar-container">
        <Navbar1></Navbar1>
      </div>
      <style jsx>
        {`
          .nav-bar-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default NavBar
