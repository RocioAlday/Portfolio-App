import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './contact.css';
import {validation} from '../../utils/validations.js';

export const Contact= ()=> {
    const [buttonText, setButtonText]= useState('Send');
    const [button, setButton]= useState(false);
    const [status, setStatus]= useState({});
    const [error, setError] = useState({});
    const [input, setInput]= useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    })

    useEffect(()=>{
        input.firstname && input.lastname && input.email && input.message ?
        setButton(false) :
        setButton(true);
        Object.keys(error).length ?
        setButtonText("Please Complete Required Inputs") :
        setButtonText("Send")
    }, [input, buttonText]);
    
    const handleChange= (e)=> {
       setInput({
        ...input,
        [e.target.name]: e.target.value
       })
       setError(validation({
        ...input,
        [e.target.name]: e.target.value
       }))
    }

    const handleSubmit= async(e)=> {
        e.preventDefault();
        setError(validation(input))
        if (Object.keys(error).length <1) {

            let response = await fetch("https://portfolio-app-production-d86f.up.railway.app/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify(input),
                });
            setButtonText("Send");
            let result = await response.json();
            setButton(true);
            setInput({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    message: ''
            })
            
            if (result.code == 200) {
                setStatus({ success: true, message: '✔️ Message sent successfully'}); 
                setTimeout(()=>{
                    setStatus({})
                }, 3000)
            } else {
                setStatus({ success: false, message: '❌ Something went wrong, please try again later.'});
                setTimeout(()=>{
                    setStatus({});
                }, 5000)
            }
        }           
    }

    return(
        <section className='connect' id= 'connect'>
            <Container>
                <Row className= 'align-items-center'>
                    <Col md= {12}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={(e)=> handleSubmit(e)}>
                            <Row className='col-input'>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={input.name} placeholder='Firstname' name= 'firstname' onChange={handleChange} ></input>
                                    {error.firstname && <p><small>{error.firstname}</small></p>}
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={input.lastname} placeholder='Lastname' name='lastname' onChange={handleChange}></input>
                                    {error.lastname && <p><small>{error.lastname}</small></p>}
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={input.email} placeholder='Email' name='email' onChange={handleChange}></input>
                                    {error.email && <p><small>{error.email}</small></p>}
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={input.phone} placeholder='Phone' name='phone' onChange={handleChange}></input>
                                </Col>
                                <Col>
                                    <textarea row= "6" value={input.message} placeholder='Message' name='message' onChange={handleChange}> </textarea>
                                    {error.message && <p><small>{error.message}</small></p>}
                                    <button type='submit' disabled={button} ><span>{buttonText}</span></button>
                                </Col>

                                {
                                    status.message && 
                                    <Row>
                                        <p> {status.message} </p>
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