import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./mailchimpForm"
import logo from "../assets/img/Allwin Logo - 2.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    {/* <MailchimpForm /> */}
                    <Col sm={6}>
                        <img src={logo} alt='logo' />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/allwin-a-739286194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} /></a>
                            {/* <a href="https://www.facebook.com/james.plamondon74/"><img src={navIcon2} /></a> */}
                            <a href="https://instagram.com/allwin_.a?igshid=OGQ5ZDc2ODk2ZA=="><img src={navIcon3} /></a>
                        </div>
                        <p>Copyright 2023. All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}