import React from 'react';
import Navbar from '../components/_App/Navbar';
import TopHeader from '../components/_App/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const SolutionsDetails = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Solutions Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Solutions Details" 
            /> 

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="services-img mb">
                                <img src="/images/solutions-details/solutions-details1.png" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services-img mb">
                                <img src="/images/solutions-details/solutions-details2.png" alt="Image" />
                            </div>
                        </div>
                        
                        <div className="col-12">
                            <div className="services-details-text">
                                <h2>IT Management</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  not only five centuries, but also the leap into.</p>

                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a dictionary of over 200 Latin words, combined with a</p>

                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc generators on the Internet tend to repeat predefined chunks as necessary, making this the first generator dictionary of over 200 Latin words, combined with a.</p>
                            </div>
                        </div>
                    </div>

                    <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="services-img mb-qc">
                                    <img src="/images/solutions-details/solutions-details3.png" alt="Image" />
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <h3>QA Testing</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition necessary, making this the first as necessary, making this</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <Footer />
        </>
    )
}

export default SolutionsDetails;