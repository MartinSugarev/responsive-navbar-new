import React, { useState, useEffect } from 'react'
import { RiFacebookBoxFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'
import { GoThreeBars } from 'react-icons/go'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Navbar(){

    const [click, SetClick] = useState(false)
    const [ width, setWidth ] = useState(0)


 
    useEffect(() => {
      const updateWindowDimension = () => {
          const innerWidth = window.innerWidth
          setWidth(innerWidth)
          if(width > 800){
            SetClick(click => false)
        }
       
      }  

      window.addEventListener('resize', updateWindowDimension)
     
      return () => {
          window.removeEventListener('resize', updateWindowDimension)
      }
      
      
    }, [width, click])

    return( width >= 800 ? (<nav className="navbar">
              <ul>
                  <Link to="/facebook"> <RiFacebookBoxFill /> </Link>
                  <Link to="/instagram"> <RiInstagramFill/> </Link>
                  <Link to="/twitter"> <RiTwitterFill/> </Link>
              </ul>
          </nav>) : ( <div className={click ? "nav-btn-clicked" : "nav-btn"}>
                  { !click ? (<GoThreeBars style={{cursor: "pointer"}} onClick={() => {SetClick(click => {
                      return true
                  })}} />) : 
                  (<>
                  <AiOutlineCloseCircle onClick={() => {SetClick(click => {
                      return false
                  })}} style={{cursor: "pointer" , color: "white", position: "absolute", top:"2%"}} />
                  <nav className="nav-vertical">
                      <ul className="nav-vertical-ul">
                         <Link to="/facebook"> <RiFacebookBoxFill /> </Link>
                         <Link to="/instagram"> <RiInstagramFill/> </Link>
                         <Link to="/twitter"> <RiTwitterFill/> </Link>
                      </ul>
                  </nav>
                  </>
                  )}
            
         </div>)
        
    )
}