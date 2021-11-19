import React from 'react'
import LeftSide from './logo-side'
import Navbar from './navbar'
export default function Header(){


return(
    <>
      <header className="header">
        <LeftSide />
        <Navbar />
      </header>
    </>
)

}