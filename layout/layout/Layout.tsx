import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = ({children}:any) => {
  return (
    <>
    <Header/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout

