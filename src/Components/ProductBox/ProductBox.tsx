import React, { useEffect, useState } from 'react'
import './ProductBox.css'
import { Container, Row, Col } from 'react-bootstrap'
import { SlBasket } from 'react-icons/sl'
import { GoScreenFull } from 'react-icons/go'
import { AiOutlineStar } from 'react-icons/ai'
import { productProps } from '../../types'
import { Link } from 'react-router-dom'
import { BsXLg } from "react-icons/bs";
import { storBasket } from '../../Redux/Stores/storBasket'
import ChackBasketProduct from '../../MyHooks/ChackBasketProduct'
import { FaBasketShopping } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos'
import 'aos/dist/aos.css'



export function ProductBox(props: productProps) {


    const [currentIMGbigShow, setcurrentIMGbigShow] = useState<string | null>(null)
    const [gifBasketShow, setgifBasketShow] = useState(false)
    const [updateForIconBasket, setupdateForIconBasket] = useState(true)


    // // ---------------------------------------------------------------

    useEffect(() => {
        Aos.init({ once: true ,offset:100})
    })

    const starDroper = (level: number): JSX.Element[] => {
        let defaultStarArray: Array<string> = ['*', '*', '*', '*', '*']
        return (
            defaultStarArray.map((star, index) => {
                return (
                    index < level ?
                        (
                            <AiOutlineStar className='starsInBoxProductActive' key={index}
                                data-aos='flip-left' data-aos-delay='1600' />
                        )
                        : (
                            <AiOutlineStar className='starsInBoxProduct' key={index}
                                data-aos='flip-left' data-aos-delay='1600' />
                        )
                )
            })
        )
    }

    const setProductinTheBasket = () => {
        if (ChackBasketProduct(props.props.id)) {
            storBasket.dispatch({ type: 'pushe', id: props.props.id })
        } else {
            toast.warn('Already exists', { theme: 'dark' })
        }
    }


    storBasket.subscribe(() => {
        setupdateForIconBasket(!updateForIconBasket)
    })
    // ---------------------------------------------------------------
    // ---------------------------------------------------------------
    // ---------------------------------------------------------------


    return (
        <>

            <ToastContainer />


            {/* ----------Big Mode Of IMAGE Showing----------- */}

            {
                <div style={{ top: 0 }} className={currentIMGbigShow == null ? 'divBigShowImg' : 'divBigShowImgActive'}>
                    <BsXLg className='iconExitBigIMGshow' onClick={() => setcurrentIMGbigShow(null)} />
                    <img src={currentIMGbigShow!} className='imgBigShow' />
                </div>
            }

            {/* --------------------- */}

            <div className="divBoxPagination" data-aos='flip-up' data-aos-delay='250'>

                {
                    storBasket.getState().map(pro => (
                        pro.id == props.props.id &&
                        <FaBasketShopping key={pro.id} className='gifAddBasket' />
                    ))
                }


                <div className='divStarsInBoxProduct'>
                    {/* Star Generator */}
                    {starDroper(props.props.star)}
                </div>
                <Link className='link' to={'/product/' + props.props.id}>
                    <img src={props.props.imgAddres} className='imgBoxPagination' />
                </Link>
                <span>{props.props.name}</span>
                <span><b> {props.props.price} $</b></span>
                <div className='divBtnKeeperBoxRandom'>
                    <button onClick={() => setcurrentIMGbigShow(props.props.imgAddres)}>
                        <GoScreenFull />
                    </button>
                    <button onClick={setProductinTheBasket}>
                        <SlBasket />
                    </button>
                </div>
            </div >


        </>
    )




}
