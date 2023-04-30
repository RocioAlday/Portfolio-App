import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contact.css';

export const Contact= ()=> {
    const formInitialDetails= {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails]= useState(formInitialDetails);
    const [buttonText, setButtonText]= useState('Send');
    const [status, setStatus]= useState({});

    const onFormUpdate= (category, value)=> {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit= async(e)=> {
        e.preventDefault();
        if (formDetails.firstname && formDetails.lastname && formDetails.email && formDetails.message) {
            setButtonText("Sending...");
            let response = await fetch("https://portfolio-app-production-d86f.up.railway.app/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),
            });
            setButtonText("Send");

            let result = await response.json();
            setFormDetails(formInitialDetails);
        
            if (result.code == 200) {
            setStatus({ success: true, message: '✔️ Message sent successfully'});
            } else {
            setStatus({ success: false, message: '❌ Something went wrong, please try again later.'});
            }
        } else {
            setStatus({ success: false, message: '❗ Please complete all fields' })
        }
    }

    return(
        <section className='connect' id= 'connect'>
            <Container>
                <Row className= 'align-items-center'>
                    <Col md= {12}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row className='col-input'>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstname} placeholder='Firstname' onChange={(e) => onFormUpdate('firstname', e.target.value)} className={formDetails.firstname.length<4 ? "border-changed" : ""} ></input>
                                    
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastname} placeholder='Lastname' onChange={(e) => onFormUpdate('lastname', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder='Phone' onChange={(e) => onFormUpdate('phone', e.target.value)}></input>
                                </Col>
                                <Col>
                                    <textarea row= "6" value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}> </textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>

                                {
                                    status.message && 
                                    <Row>
                                        <p className= {status.success === false ? "danger" : "success"}> {status.message} </p>
                                    </Row>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}