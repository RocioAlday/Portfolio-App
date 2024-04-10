import { useState, useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../Images/woman1.jpg';
import './banner.css';
import { BsRocketTakeoff } from "react-icons/bs";

export const Banner= ()=> {
    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting, setisDeleting]= useState(false);
    const toRotate= ['Engineer', 'Backend', 'Frontend', 'SAP Certified Associate', ];
    const [text, setText]= useState('');
    const period= 2000;
    const [delta, setDelta]= useState(100 - Math.random() *100);

    useEffect(()=> {
        let ticker= setInterval(()=>{
            tick();
        }, delta)

        return ()=> {clearInterval(ticker)};
    }, [text]);

    const tick= ()=> {
        let i= loopNum % toRotate.length;
        let fullText= toRotate[i];
        let updateText= isDeleting? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        
        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta=> prevDelta /2)
        }

        if(!isDeleting && updateText === fullText){
            setisDeleting(true);
            setDelta(period);
        } else if(isDeleting && updateText === ''){
            setisDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className= 'align-items-center' >
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Fullstack Dev. ` }<br/><span className="wrap">{text}</span></h1>
                        <p>I'm a Junior Fullstack Developer and SAP Certified Associate Backend Developer. I'm also a Biomedical Engineer, but I've decided to focus my career on the 
                            world of software development, where I can combine my passion for technology with my ability to solve problems, within industry 4.0.
                            <p>I'm looking for new challenges and opportunities in the IT and business field. I would love to be part of a team providing value in the creation of innovative solutions that optimize business processes and improve operational efficiency <BsRocketTakeoff size={20} /></p>
                        </p>
                        <a href="#connect" className="link-connect"><button className="bg-transparent border-0" onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size= {25} /></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="Headder Img" className="header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}