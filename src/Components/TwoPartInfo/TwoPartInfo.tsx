import React, { useEffect } from 'react'
import './twoPartInfo.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'





export default function TwoPartInfo() {

    useEffect(()=>{
        Aos.init({ once: true })
    })


    return (
        <>

            <Container>
                <Row className=' d-flex align-items-center' style={{overflow:'hidden'}}>

                    <Col className='d-none d-md-flex' xs={{ span: 12 }} md={{ span: 6 }} data-aos='slide-right'>
                        <section className='sectionTwoPart2'>
                            <img src="./Images/toPartIMG.jpg" className='imgToPart' />
                        </section>
                    </Col>

                    <Col xs={{ span: 12 }} md={{ span: 6 }} data-aos='slide-left'>
                        <section className='sectionTwoPart'>
                            <div>
                                <h2 className='text-primary'>Do you interested Camping ?</h2>
                                <p style={{ color: 'gray', fontSize: '15px' }}>
                                    Lorem ipsum dolor sit amet consectetur elit.
                                    Lorem ipsum dolor sit amet consectetur.
                                    Lorem ipsum dolor sit elit.
                                    Lorem ipsum dolor sit amet conpisicing .
                                    Lorem ipsum dolor sit ameting elit.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing.
                                    Lorem ipsum dolor sit amet consectetusicing .
                                </p>
                            </div>

                            <div className='d-flex justify-content-end '>
                                <Link to={'/Category'} className='link'>
                                    <input type="button" value="Categories" className='btnTwoPart' />
                                </Link>
                            </div>

                        </section>
                    </Col>




                </Row>
            </Container>



        </>
    )
}
