import React from 'react'
import Banner from './Banner'
import Meta from './Meta'
import Navbar from './Navbar'


const Layout = ({children}) => {
  return (
    <>
      <Meta />
      <Navbar />
      <Banner />
      <Footer />
    </>
  )
}

export default Layout