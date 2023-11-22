import React from "react";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/ContactUs/ContactInfo";
import ContactForm from "../components/ContactUs/ContactForm";
import Footer from "../components/_App/Footer";

const ContactUs = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Us"
      />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
};

export default ContactUs;
