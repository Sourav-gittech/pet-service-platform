import React from 'react'
import HomeBanner from '../../components/home/HomeBanner'
import AboutUsSection from '../../components/home/AboutUsSection'
import ServiceSection from '../../components/common/ServiceSection'
import ProductSection from '../../components/home/ProductSection'
import PricingSection from '../../components/home/PricingSection'
import TestimonialSection from '../../components/common/TestimonialSection'
import StatsSection from '../../components/common/StatsSection'
import FooterNewsletterSection from '../../components/common/FooterNewsletterSection'

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AboutUsSection />
      <ServiceSection />
      <ProductSection />
      <PricingSection />
      <TestimonialSection />
      <StatsSection />
      <FooterNewsletterSection />
    </>
  )
}

export default Home