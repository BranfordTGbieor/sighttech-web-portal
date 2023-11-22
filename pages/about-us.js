import React from "react";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import AboutUsArea from "../components/AboutUs/AboutUsArea";
import Features from "../components/Common/Features";
import OurCompany from "../components/AboutUs/OurCompany";
import TechnologyUpdate from "../components/Common/TechnologyUpdate";
import TeamMembers from "../components/Common/TeamMembers";
import Testimonials from "../components/Common/Testimonials";
import Footer from "../components/_App/Footer";

const AboutUs = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
      />

      <AboutUsArea />

      <Features />

      {/* <OurCompany /> */}

      {/* <TechnologyUpdate /> */}

      <TeamMembers />

      <Testimonials />

      <Footer />
    </>
  );
};

export default AboutUs;
