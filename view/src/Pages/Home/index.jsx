import React from 'react'
import Hero from '../../Components/Hero'
import Images from '../../Components/Images'
import Products from '../../Components/Products'
import News from '../../Components/News'
import ShopMethod from '../../Components/ShopMethod'
import {Helmet} from "react-helmet";

function Home() {
  return (
    <>

      <Helmet>
        <title>Home</title>
        <meta name='description' content='Your home.' />
      </Helmet>
      <Hero />
      <Images />
      <Products />
      <News />
      <ShopMethod />

    </>
  )
}

export default Home
