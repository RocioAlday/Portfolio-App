import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col} from 'react-bootstrap';
import './skills.css';
import front from '../../Images/front.png';
import back from '../../Images/backend.png';
import skills from '../../Images/competence.png';
import scrum from '../../Images/scrum.png';
import gitflow from '../../Images/gitflow.png';

export const Skills= ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    

    return (
        <section className="skills" id= 'skills'>
            <Container className="container-Component">
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Technical and Soft Skills that I consider reflect my personality, way of working and technical knowledge</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                              <div className="item">
                                <img src={front} alt="Image" />
                                <h5>Frontend</h5>
                                <div className="container-list py-4 m-1">
                                <div className="list-items">
                                    <h6>React </h6>
                                    <h6>Redux </h6>
                                    <h6>Css </h6>
                                    <h6>Html </h6>
                                    <h6>Javascript </h6>
                                    <h6>Bootstrap</h6>
                                </div>
                                </div>
                              </div>
                        
                              <div className="item">
                                <img src={back} alt="Image" />
                                <h5>Backend</h5>
                                <div className="container-list py-4 m-1">
                                <div className="list-items">
                                    <h6>Node </h6>
                                    <h6>Javascript</h6>
                                    <h6>Express </h6>
                                    <h6>APIRest </h6>
                                    <h6>PostgresSql </h6>
                                    <h6>Jest </h6>
                                </div>
                                </div>
                              </div>

                              <div className="item">
                                <img src={skills} alt="Image" />
                                <h5>Soft Skills</h5>
                                <div className="container-list py-4 m-1">
                                <div className="list-items">
                                    <h6>Communication </h6>
                                    <h6>Teamwork </h6>
                                    <h6>Proactivity </h6>
                                    <h6>Empathy </h6>
                                    <h6>Productivity</h6>
                                    <h6>Critical thinking</h6>
                                </div>
                                </div>
                              </div>

                              <div className="item">
                                <img src={gitflow} alt="Image" />
                                <h5>GitFlow</h5>
                                <div className="container-list py-4 m-1">
                                <div className="list-items">
                                    <h6>Branching System </h6>
                                </div>
                                </div>
                              </div>
                              <div className="item">
                                <img src={scrum} alt="Image" />
                                <h5 style={{ "font-size": "34px"}}>Agile Methodology</h5>
                                <div className="container-list py-4 m-1">
                                <div className="list-items">
                                    <h6>Scrum </h6>
                                    <h6>Trello </h6>
                                </div>
                                </div>
                              </div>

                            </Carousel>

                        </div>

                    </Col>
                </Row>
            </Container>
        </section>

    )
}