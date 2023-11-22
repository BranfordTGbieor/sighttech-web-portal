import React from 'react';

const WorkingProcess = () => {
    return (
        <div className="home-process-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Working Process</span>
                    <h2> Our Innovative Approach </h2>
                    <p> We implament projects using innovative agile approaches inorder to iteratively deliver value.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-process">
                            <div className="icon">
                                <img src="/images/process/process1.png" alt="process" />
                                <span>
                                    <img src="/images/process/next.png" alt="shape" />
                                </span>
                            </div>
                            <div className="content">
                                <h3> Requirements Gathering</h3>
                                <p>
                                    Key stakeholders and project goals are identified. Gathered requirements are analized, documented and prioritized.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-process">
                            <div className="icon">
                                <img src="/images/process/process3.png" alt="process" />
                                <span>
                                    <img src="/images/process/next.png" alt="shape" />
                                </span>
                            </div>
                            <div className="content">
                                <h3>Design & Development</h3>
                                <p>
                                    Processes such as architectural diagrams, mockups, CI/CD pipelines, coding, unit tesing are implemented.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-process">
                            <div className="icon">
                                <img src="/images/process/process2.png" alt="process" />
                                <span className="pro-span">
                                    <img src="/images/process/next.png" alt="shape" />
                                </span>
                            </div>
                            <div className="content">
                                <h3>Deployment & Testing</h3>
                                <p>
                                    A functional service is deployed to a staging server using existing pipelines for integration and UX testing.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-process">
                            <div className="icon">
                                <img src="/images/process/process4.png" alt="process" />
                            </div>
                            <div className="content">
                                <h3>Product Handover</h3>
                                <p>
                                    knowledge and data transfer, documentations, mentorship, and other activities as outlined in contract.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkingProcess;