import React, { useEffect, useState } from 'react'
import './GoUp.css'
import { PiArrowFatLineUpLight } from "react-icons/pi";



export default function GoUp() {

    const [showGoUp, setshowGoUp] = useState<boolean>(false)

    const goUpFunc = () => {
        window.scroll({ left: 0, top: 0, behavior: 'smooth' })
    }


    window.addEventListener('scroll', () => {
        if (window.scrollY > 600 ) {
            setshowGoUp(true)
        }else{
            setshowGoUp(false)
        }
    })

    // ----------------------------------------------------------------------
    return (
        <div className= {`divMainGoUp ${showGoUp? 'diShowGoUpActive':'diShowGoUpDeActive'}`} onClick={goUpFunc}>
            <PiArrowFatLineUpLight className='iconGoUp' />
        </div>
    )
}

