import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const WhyChooseUs = () => {
    return (
        <div className="choose-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Why Choose Us</span>
                    <h2>What Differentiates Us</h2>
                    <p> Why we are diferent and key diferentiating factors.</p>
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
                                                Through extensive research practices, we gain genuine undertsanding about the diferent needs of each and everyone of clients. We do our best to provide solutions tailored to their individual needs.
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
                                                With the use of modern approaches, technologies, tools and stacks, we provide efficient services and solutions to meet you needs.
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
                                                With the core value to delivery the very best products and solutions, we attract highly skilled and trained engineers with years of extensive industry experience.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="d">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Quality Service
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                We have a binding principle of delivering only the best or nothing. We handle our clients with dignity and respect as we provide solutions.
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

export default WhyChooseUs;