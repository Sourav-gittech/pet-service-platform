import React from 'react'
import ContactBanner from '../../components/contact/ContactBanner'
import GetInTouch from '../../components/contact/GetInTouch'
import StatsSection from '../../components/common/StatsSection'
import FooterNewsletterSection from '../../components/common/FooterNewsletterSection'

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <GetInTouch />
      <StatsSection />
      <FooterNewsletterSection />
    </>
  )
}

export default Contact