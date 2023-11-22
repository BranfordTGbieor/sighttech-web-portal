import React from 'react';
import Navbar from '../components/_App/Navbar';
import TopHeader from '../components/_App/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import FaqForm from '../components/Faq/FaqForm';
import Footer from '../components/_App/Footer';

const Faq = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <PageBanner 
                pageTitle="FAQ" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ" 
            /> 

            <FaqContent />

            <FaqForm />
            
            <Footer />
        </>
    )
}

export default Faq;