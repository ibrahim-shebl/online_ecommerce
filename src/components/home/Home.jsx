import React from 'react'
import BannerCategories from '../../pages/BannerCategories'
import HomeBanner from '../../pages/HomeBanner'
import Categories from '../../pages/Categories'
import ProductList from '../../pages/ProductList'
import Hightlights from '../../pages/Hightlights'
import DiscountedBanner from '../../pages/DiscountedBanner'
import Blog from '../../pages/Blog'

const Home = () => {
  return (
    <>
        <BannerCategories />
        <HomeBanner />
        <Hightlights />
        <Categories /> 
        <ProductList />
        <DiscountedBanner />
        <Blog />
    </>
  )
}

export default Home