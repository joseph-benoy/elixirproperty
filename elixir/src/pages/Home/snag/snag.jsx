import React from "react";
import { Container, Row } from "react-bootstrap";
const Snag = () => {
    return ( 
        <>
            <Row>
                <Col lg={6}>
                    <img src="/images/snag/s1.webp" alt="what-is-snagging"/>
                </Col>
                <Col lg={6}>
                    <h2>What is snagging?</h2>
                    <p>"Snagging" is a necessary process of identifying issues with your property. Snagging issues range from leaks, plumbing faults, un-level ceilings, floors and walls, damaged units, missing insulation, poor joinery and structural issues. For landlords, it is a notoriously stressful and time-consuming process.​ The importance of hiring a snagging company is that we are experts in identifying issues with specialist equipment, and provide one comprehensive snag list for your developer to easily follow.</p>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <h2>Who needs snagging?</h2>
                    <p>
                    Anyone buying a new build home
                     or a home in the secondary market
                      should consider a snagging inspection. 
                      You could argue that if you’re spending
                       anything it’s crazy not to!
                        A snagging inspection can also be useful for
                         buying ready built homes or at the 11 month
                          warranty period. Also, if you’ve already moved 
                          in and are having snagging issues with your
                           developer then a professional snagging 
                           report can help give weight to your case.
                    </p>
                </Col>
                <Col lg={6}>
                    <img src="/images/snag/s1.webp" alt="who-needs-snagging"/>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <img src="/images/snag/s1.webp" alt="is-snagging-necessary"/>
                </Col>
                <Col lg={6}>
                    <h2>Is snagging necessary?</h2>
                    <p>"Snagging" is a necessary process of identifying issues with your property. Snagging issues range from leaks, plumbing faults, un-level ceilings, floors and walls, damaged units, missing insulation, poor joinery and structural issues. For landlords, it is a notoriously stressful and time-consuming process.​ The importance of hiring a snagging company is that we are experts in identifying issues with specialist equipment, and provide one comprehensive snag list for your developer to easily follow.</p>
                </Col>
            </Row>
        </>
     );
}
 
export default React.memo(Snag);