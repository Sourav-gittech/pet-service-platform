import React from 'react'
import TermsBanner from '../../components/termsOfService/TermsBanner'
import StatsSection from '../../components/common/StatsSection'
import FooterNewsletterSection from '../../components/common/FooterNewsletterSection'
import TermsList from '../../components/termsOfService/TermsList'

const TermsOfService = () => {
    return (
        <>
            <TermsBanner />
            <TermsList />
            <StatsSection />
            <FooterNewsletterSection />
        </>
    )
}

export default TermsOfService