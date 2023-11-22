import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FaqContent = () => {
    return (
        <div className="choose-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Why Choose Us</span>
                    <h2>We Achieved People’s Trust by Our Great Service</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>
                </div>
				
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="choose-img">
                            <img src="/images/choose-img.png" alt="choose" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="choose-content">
                            <div className="faq-accordion">
                                <Accordion allowZeroExpanded preExpanded={['a']}>
                                    <AccordionItem uuid="a">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Great Understanding
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="b">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Update Technology
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="c">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Experienced Team
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="d">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Best Quality Service
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqContent;