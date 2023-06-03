import React from "react";
import { data } from '../../dataProjects';
import './projects.css';
import {Container, Row, Col} from 'react-bootstrap';

export const Projects= ()=> {
           
    const project= data;

    return (
      <section className="work-section" id= "work-section" >
        <Container className="container-work">
        <Row>
            <Col>
            <div className='work'>
              <div className='max-width'>
                <div className='pb-8'>
                  <p className='title'>
                    Projects
                  </p>
                  <p className='description'>Check out some of my recent projects</p>
                </div>
        

          <div className="grid sm:grid-cols-2 md:grid-cols-3">
                  

              {project.map((item, index) => (

          <div key={index}>
            <img src= {item.image} className= "imag img-fluid rounded-md content-div" />
            
            <div className="text-work">
                {item.name}
            </div>

              <div className="pt-8 text-center">

                <a href={item.github} target="_blank">
                  <button
                    className="button"
                  >
                    Github
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                
                {item.live.length >0 ? <a href={item.live} target="_blank">
                  <button
                    className="button"
                  >
                    Live
                  </button>
                </a> : <></>}
              </div>
          </div>
        ))}
        
        
        </div>
              </div>
            </div>
            
            </Col>
          </Row>
        </Container>
      </section>
    )
}