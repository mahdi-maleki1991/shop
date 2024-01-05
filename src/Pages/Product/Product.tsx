import React, { useEffect, useState } from 'react'
import './Product.css'
import { Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { SlBasket } from 'react-icons/sl'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
import { AllProduct } from '../../Datas'
import { productType } from '../../types'
// import { basketProduct } from '../../Datas'
import { storBasket } from '../../Redux/Stores/storBasket'
import ChackBasketProduct from '../../MyHooks/ChackBasketProduct'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos'
import 'aos/dist/aos.css'


export function Product() {


    let parametrID = useParams()
    const [currentProduct, setcurrentProduct] = useState<productType>()
    const [imageLocation, setimageLocation] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

    useEffect(() => {
        let thisProduct: productType = AllProduct.filter(product => product.id == Number(parametrID.productID))
        setcurrentProduct(thisProduct)
        Aos.init({once:true , duration:1500})
        window.scroll({ top: 280, left: 0, behavior: 'smooth' })
    }, [])

    const addProductInBasket = () => {
        if (ChackBasketProduct(currentProduct![0].id)) {
            storBasket.dispatch({ type: 'pushe', id: currentProduct![0].id })
            toast.success('Added to your basket', { theme: 'dark' })
        } else {
            toast.warn('Already exist', { theme: 'dark' })
        }
    }

    const imageZoomMouse = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        setimageLocation({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
    }

    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    return (
        <>

            <Header />

            <ToastContainer />

            <section className="sectionFirstMainProduct">
                {
                    currentProduct != undefined && (


                        <div className="divMainProductMain">

                            <div className='divAddToBasketProduct'>
                                <span data-aos='fade-right'>{currentProduct![0].name}</span>
                                <div>
                                    <span data-aos='fade-right'>{currentProduct![0].price} $</span>

                                    <button type="button" className='btnAddBasketProduct' data-aos='fade-left'
                                        onClick={addProductInBasket}>
                                        Add Basket
                                        <SlBasket className='iconTrolyAddBasketProduct' />
                                    </button>

                                </div>
                            </div>

                            <Container>
                                <Row className='d-flex justify-content-center align-item-center'>

                                    <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 6 }} xl={{ span: 5 }}
                                        data-aos='slide-right' >
                                        <div className="divProductLeft">
                                            <Col xs={{ span: 12 }} sm={{ span: 9 }} md={{ span: 12 }} className='d-flex justify-content-center '>
                                                <div className="divImgProductZoom">
                                                    <img src={currentProduct![0].imgAddres} className='IMGProductLeftMainShowing '
                                                        onMouseMove={(event) => imageZoomMouse(event)}
                                                        style={{ transformOrigin: `${imageLocation.x}px ${imageLocation.y}px` }}
                                                    />
                                                </div>
                                            </Col>
                                        </div>
                                    </Col>

                                    <Col xs={{ span: 12 }} md={{ span: 6 }} xl={{ span: 7 }}
                                        data-aos='slide-left'>
                                        <div className="divProductRight">
                                            <h2>{currentProduct![0].name}</h2>
                                            <p>
                                                <b>Description: </b>
                                                <br />
                                                {currentProduct![0].des}
                                            </p>
                                            <div className="divInfoCurrentProduct">
                                                <span className='spanBoxInfoPro' data-aos='flip-up' data-aos-delay='1000'>
                                                    Width :<span>{currentProduct![0].width}</span>
                                                </span>
                                                <span className='spanBoxInfoPro' data-aos='flip-up' data-aos-delay='1000'>
                                                    Height :<span>{currentProduct![0].height}</span>
                                                </span>
                                                <span className='spanBoxInfoPro' data-aos='flip-up' data-aos-delay='1000'>
                                                    Weight :<span>{currentProduct![0].weight}</span>
                                                </span>
                                                <span className='spanBoxInfoPro' data-aos='flip-up' data-aos-delay='1000'>
                                                    <span>{currentProduct![0].ingradiant}</span>
                                                </span>
                                            </div>

                                        </div>

                                    </Col>
                                </Row>
                            </Container>



                        </div>
                    )}
            </section>




            <Footer />

        </>
    )


}
