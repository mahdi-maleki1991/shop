import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './Basket.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { MdPayments, MdOutlineLayersClear } from 'react-icons/md'
import { IoWallet } from 'react-icons/io5'
import { BsQrCode } from 'react-icons/bs'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { productType } from '../../types'
import { storBasket } from '../../Redux/Stores/storBasket'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos'
import 'aos/dist/aos.css'



export function Basket() {

    const [basketArray, setbasketArray] = useState<productType>(storBasket.getState())
    const [price, setPrice] = useState<number>(0)




    useEffect(() => {
        generatBasketProduct()
        calculatePrices()
        Aos.init({ once: true })
    }, [basketArray])

    useEffect(() => {
        window.scroll({ top: 250, left: 0, behavior: 'smooth' })
    }, [])

    const calculatePrices = () => {
        setPrice(0)
        basketArray.map(item => {
            setPrice(pre => pre + Number(item.price))
        })
    }


    const generatBasketProduct = () => {
        return (
            basketArray.length > 0 ? (
                basketArray.map(product => (
                    <div className="divBoxProductInBasket" key={product.id}>
                        <div className='divInfoIMGkeeperBasket'>
                            <img src={product.imgAddres} className='imgProInShoingBasket' />
                            <div className="divInfoKeeperInBasket">
                                <span>{product.name}</span>
                                <span>discount : {product.discount}%</span>
                                <div className="divPlusMinesInBasket">
                                    <AiOutlinePlus className='IconPlusProductInBasket' />
                                    <span className='spanBasketshowEachPro'>1</span>
                                    <AiOutlineMinus className='IconMinesProductInBasket' />
                                </div>
                            </div>
                        </div>
                        <div className="divShowPricAndClose" >
                            <span>{product.price} $</span>
                            <AiOutlineCloseCircle className='iconCloseShowBasket'
                                onClick={() => deleteItemFromBasket(product.id)} />
                        </div>
                    </div>
                ))
            ) : (
                <span className='spanBasketisEmpty'>BASKET IS EMPTY</span>
            )

        )

    }

    storBasket.subscribe(() => {
        setbasketArray(storBasket.getState())
    })

    const clearAllBasket = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (basketArray.length > 0) {
            storBasket.dispatch({ type: 'deleteAll' })
            toast.success('The Basket is Empty', { theme: 'dark' })
        }
    }

    const deleteItemFromBasket = (id: number) => {
        storBasket.dispatch({ type: 'delete', id })
    }

    const btnApplyFunc = () => {
        toast.error('The CODE is not Valis', {
            position: 'top-right',
            autoClose: 5000,
            theme: 'dark'
        })
    }

    // -------------------------------------------------------------
    // -------------------------------------------------------------
    return (
        <>

            <Header />


            <ToastContainer />

            <section className="sectionMainBasket">

                <div className={basketArray.length == 0 ? 'divShowProductInBasketEmpty' : 'divShowProductInBasket'}>

                    <img src="https://www.pngkey.com/png/full/114-1148325_curve-shape-png-jpg-royalty-free-library-curve.png" className='waveHeaderInBasket'
                        data-aos='fade-down' data-aos-delay='800' data-aos-duration='3000' />
                    {generatBasketProduct()}
                </div>

                <div className="divShowPricesInBasket">

                    <IoWallet className='iconWaletBigInBasketPage' data-aos='fade-down' />

                    <span data-aos='fade'>Do you have any discount code?</span>

                    <div className='divInputsDiscountKeeper'>
                        <div style={{ position: 'relative' }}>
                            <BsQrCode className='iconCodeInDiscount' />
                            <input type="text" className='inutTextDiscountCode' placeholder='Code' />
                        </div>

                        <button className='inputBTNdiscount' onClick={btnApplyFunc}>
                            APPLY
                        </button>
                    </div>

                    <div className="divInfoRowBasket" data-aos='slide-left' data-aos-delay='300'>
                        <span>Price</span>
                        <span>{price} $</span>
                    </div>

                    <div className="divInfoRowBasket" data-aos='slide-left' data-aos-delay='400'>
                        <span>Post Cost</span>
                        <span>{price != 0 ? (4) : (0)}  $</span>
                    </div>

                    <div className="divInfoRowBasket" data-aos='slide-left' data-aos-delay='500'>
                        <span>Tax (2%)</span>
                        <span> {(price * 2) / 100} $</span>
                    </div>

                    <div className="divInfoRowBasket" data-aos='slide-left' data-aos-delay='600'>
                        <span>Total Price</span>
                        <span><b>{price != 0 ? (price + (price * 2) / 100 + 4) : (0)} $</b></span>
                    </div>

                    <button className={basketArray.length == 0 ? ('inputBTNPayInBasketEmpty') : ('inputBTNPayInBasket')}>
                        Pay
                        <MdPayments style={{ marginLeft: 10, fontSize: '20px' }} />
                        <span className="spanMove"></span>
                        <span className="spanMove2"></span>
                    </button>

                    <button className={basketArray.length == 0 ? ('inputBTNClearAllInBasketEmpty') : ('inputBTNClearAllInBasket')}
                        onClick={(event) => clearAllBasket(event)}>
                        Clear All
                        <MdOutlineLayersClear style={{ marginLeft: 10, fontSize: '20px' }} />
                    </button>


                </div>

            </section>



            <Footer />
        </>
    )
}




