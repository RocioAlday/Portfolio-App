import { useState, useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../Images/woman1.jpg';
import './banner.css';

export const Banner= ()=> {
    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting, setisDeleting]= useState(false);
    const toRotate= ['Engineer', 'Backend', 'Frontend', 'Freelancer', ];
    const [text, setText]= useState('');
    const period= 2000;
    const [delta, setDelta]= useState(500 - Math.random() *100);

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
                        <p>I am a Junior Fullstack Web Developer and Biomedical Engineer. My journey into the exciting world of programming began a year ago, but as an Engineer I always had a great interest and love for technology. 
                            As a Fullstack Developer, I have knowledge and practical experience in both frontend and backend development, which allows me to have a comprehensive view of the process of creating apps. 
                            I am searching for new challenges and opportunities to contribute to a project team and continue learning and improving my skills.
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