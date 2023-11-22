import React from 'react';
import Navbar from '../components/_App/Navbar';
import TopHeader from '../components/_App/TopHeader';
import MainBanner from '../components/HomeOne/MainBanner';
import SmartServices from '../components/Common/SmartServices';
import OurCompany from '../components/HomeOne/OurCompany';
import WhyChooseUs from '../components/HomeOne/WhyChooseUs';
import WorkingProcess from '../components/Common/WorkingProcess';
import CaseStudies from '../components/Common/CaseStudies';
import Features from '../components/Common/Features';
import TeamMembers from '../components/Common/TeamMembers';
import Testimonials from '../components/Common/Testimonials';
import BlogPost from '../components/Common/BlogPost';
import ContactUs from '../components/Common/ContactUs';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <MainBanner />

            <SmartServices />

            <OurCompany />

            <WhyChooseUs />

            <WorkingProcess />

            {/* <CaseStudies /> */}

            {/* <Features /> */}

            {/* <TeamMembers /> */}

            {/* <Testimonials /> */}

            <BlogPost />

            <ContactUs />
            
            <Footer />
        </>
    )
}

export default Index;