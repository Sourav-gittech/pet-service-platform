import React from 'react'
import ServiceBanner from '../../components/services/ServiceBanner'
import ServiceSection from '../../components/common/ServiceSection'
import TestimonialSection from '../../components/common/TestimonialSection'
import StatsSection from '../../components/common/StatsSection'
import FooterNewsletterSection from '../../components/common/FooterNewsletterSection'
import MissionSection from '../../components/services/MissionSection'
import AdSection from '../../components/services/AdSection'

const Service = () => {
    return (
        <>
            <ServiceBanner />
            <ServiceSection />
            <MissionSection />
            <AdSection />
            <TestimonialSection />
            <StatsSection />
            <FooterNewsletterSection />
        </>
    )
}

export default Service