import React, { useEffect, useRef, useState } from 'react'
import './randomProduct.css'
import { Col, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { SlBasket } from 'react-icons/sl'
import { GoScreenFull } from 'react-icons/go'
import { AiOutlineStar } from 'react-icons/ai'
import { AllProduct } from '../../Datas'
import { productType } from '../../types'
import { ProductBox } from '../ProductBox/ProductBox'



// this Component is showing the product that has more than ziro discount


export default function RandomProduct() {


    const [discountP, setdiscountP] = useState<productType>()
    const mainDivRandom = useRef<HTMLDivElement>(null)

    // -------------------------------------------------------------------

    useEffect(() => {
        let discountProduct: productType = AllProduct.filter(box => box.discount > 0)
        setdiscountP(discountProduct)
    }, [])


    const boxDiscountHandler = () => (
        discountP != undefined && (
            discountP.map(box => (
                <ProductBox key={box.id} props={box}/>
            ))
        )
    )


    const beltGoRight = () => {
        if (mainDivRandom.current) {
            mainDivRandom.current.scrollBy({
                top: 0,
                left: 170,
                behavior: 'smooth'
            })
            if (mainDivRandom.current.offsetWidth + mainDivRandom.current.scrollLeft >= mainDivRandom.current.scrollWidth) {
                mainDivRandom.current.scrollTo(0, 0)
            }
        }
    }

    const beltGoLeft = () => {
        if (mainDivRandom.current) {
            mainDivRandom.current.scrollBy({
                top: 0,
                left: -170,
                behavior: 'smooth'
            })
            if (mainDivRandom.current.scrollLeft <= 0) {
                mainDivRandom.current.scrollTo(mainDivRandom.current.scrollWidth, 0)
            }
        }
    }


    // -------------------------------------------------------------------
    // -------------------------------------------------------------------
    // -------------------------------------------------------------------



    return (
        <>
            <section className="sectionRandomP">

                <div className="divRandomLeft">
                    <h3 style={{ color: 'white' }}> shake your leg... </h3>
                    <img src="https://www.pngall.com/wp-content/uploads/2016/06/Limited-offer-Transparent.png" className='imgOff' />
                    <input type="button" value=" SALE " className='btnOffLeft' />
                </div>
                <div className="divRandomRight" ref={mainDivRandom}>
                    <MdKeyboardArrowRight className='aroowBeltRight' onClick={beltGoRight}/>
                    {/* ---This Function is Generating discount Boxes */}
                    {
                        boxDiscountHandler()
                    }
                    <MdKeyboardArrowLeft className='arrowBeltLeft' onClick={beltGoLeft} />
                </div>

            </section>
        </>
    )

}
