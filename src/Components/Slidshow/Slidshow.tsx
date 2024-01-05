import React, { useEffect, useRef, useState } from 'react'
import './slidshow.css'
import { Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { slidShowData } from '../../Datas'





export default function Slidshow() {


    const [counterSlider, setcounterSlider] = useState<number>(0)
    const refImgSlid = useRef<HTMLImageElement | null>(null)

    // ----------------------------------------------------------------------------------

    useEffect(() => {
        setInterval(() => {
            setcounterSlider(pre => pre + 1)
        }, 6000)
    }, [])



    useEffect(() => {

        counterSlider == slidShowData.length && setcounterSlider(0)
        counterSlider < 0 && setcounterSlider(slidShowData.length - 1)

        refImgSlid.current?.classList.remove('activSlide')
        setTimeout(() => {
            refImgSlid.current?.classList.add('activSlide')
        }, 20)

    }, [counterSlider])



    const smallBoxHandeler = (index: number) => {
        setcounterSlider(index)
    }




    // ----------------------------------------------------------------------------------

    return (
        <>

            {
                slidShowData.length > 0 &&

                <Container className='d-none d-sm-flex'>
                    <Row className='d-flex w-100 justify-content-center'>

                        <Col sm={{ span: 11 }} md={{ span: 8 }} lg={{span:6}} className='p-0' >
                            <div className="divMainSlidShow">

                                <IoIosArrowForward className='arrowSlidRight'
                                    onClick={() => setcounterSlider(pre => pre + 1)}
                                />


                                < img src={slidShowData[counterSlider]} className='imgSlidShowMain' ref={refImgSlid} />



                                <div className='divDashKeeprtSlider'>
                                    {
                                        slidShowData.map((box, index) => (

                                            counterSlider == index ? (
                                                < span key={index} className='spanBoxShowSlidActive'
                                                    onClick={() => smallBoxHandeler(index)}
                                                ></span>
                                            ) : (
                                                < span key={index} className='spanBoxShowSlid'
                                                    onClick={() => smallBoxHandeler(index)}
                                                ></span>
                                            )

                                        ))
                                    }
                                </div>

                                <IoIosArrowBack className='arrowSlidLeft'
                                    onClick={() => setcounterSlider(pre => pre - 1)}
                                />

                            </div>
                        </Col>

                    </Row>
                </Container >

            }
        </>
    )
}
