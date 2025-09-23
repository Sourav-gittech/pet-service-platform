import React from 'react'
import ProductBanner from '../../components/product/ProductBanner'
import ProductList from '../../components/product/ProductList'
import FooterNewsletterSection from '../../components/common/FooterNewsletterSection'

const Product = () => {
  return (
    <>
      <ProductBanner />
      <ProductList />
      <FooterNewsletterSection />
    </>
  )
}

export default Product