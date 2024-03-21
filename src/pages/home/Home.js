import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/heroSection/HeroSection'
import Produts from '../../components/products/Produts'
import Recommendation from '../recommendation/Recommendation'
import Footer from '../../components/footer/Footer'
import QuickView from '../../components/quickView/QuickView'
import Layout from '../../components/layout/Layout'


function Home() {
  return (

    <Layout>
      <HeroSection />
      <Recommendation />
      <Produts />
    </Layout>

  )
}

export default Home