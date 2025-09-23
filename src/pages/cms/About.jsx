import React from 'react'
import TestimonialSection from '../../components/common/TestimonialSection'
import StatsSection from '../../components/common/StatsSection'
import FooterNewsletterSection from '../../components/common/FooterNewsletterSection'
import AboutBanner from '../../components/about/AboutBanner'
import AboutUsSection from '../../components/about/AboutUsSection'
import ProvideSection from '../../components/about/ProvideSection'
import TeamSection from '../../components/about/TeamSection'

const About = () => {
    return (
        <>
            <AboutBanner />
            <AboutUsSection />
            <ProvideSection />
            <TeamSection />
            <TestimonialSection />
            <StatsSection />
            <FooterNewsletterSection />
        </>
    )
}

export default About