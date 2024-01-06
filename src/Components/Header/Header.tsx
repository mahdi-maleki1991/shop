import React, { useEffect, useState } from 'react'
import './header.css'
import { GoSearch } from 'react-icons/go'
import { SlBasket } from 'react-icons/sl'
import { MdSupportAgent } from 'react-icons/md'
import { VscSignIn } from 'react-icons/vsc'
import { BiCategory } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { BsShop } from 'react-icons/bs'
import { IoBodyOutline } from 'react-icons/io5'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import { storNightMode } from '../../Redux/Stores/storNightMod'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Header() {


    const [circleNightMod, setcircleNightMod] = useState<string>(storNightMode.getState())

    // ---------------------------------------------------

    useEffect(() => {
        Aos.init({ once: true })
    })

    const changeModeNughtDay = () => {
        if (storNightMode.getState() == 'true') {
            storNightMode.dispatch({ type: 'true' })
        } else {
            storNightMode.dispatch({ type: 'false' })
        }
    }

    storNightMode.subscribe(() => {
        setcircleNightMod(storNightMode.getState())
    })

    useEffect(() => {
        if (circleNightMod == 'true') {
            document.body.setAttribute('style', 'background-color: white;')
        } else {
            document.body.setAttribute('style', 'background-color: rgb(50, 50, 50);filter: brightness(40%);')
        }
    }, [circleNightMod])

    // ---------------------------------------------------
    // ---------------------------------------------------
    return (
        <>

            <div className='mainHeader'>
                {/* -------------------------------Step One------------------- */}
                <div className="divLogoInHeader">
                    <img src="https://img.freepik.com/premium-vector/mountains-camping-logo-design-vector-outdoor-template-icon-logo-winter-camp-illustrations_766202-20.jpg?w=2000" className='imgMainLogo' data-aos='zoom-in' data-aos-duration='1100' />
                    <div className="divHeaderSearchKeeper " data-aos='flip-up' data-aos-delay='100'
                        data-aos-duration="1000">
                        <input type="text" className='inputSearchHeader' placeholder='Search ...' />
                        <GoSearch className='iconSearchHeaderInput' />
                    </div>
                    {/* --Night Mode */}
                    <div className="divConNightMod" onClick={changeModeNughtDay}>
                        <span className='NspanNightmod'>N</span>
                        <div className={circleNightMod == 'false' ? "divCircleNightMode" : 'divCircleNightModeNight'}
                        ></div>
                        <span className='DspanNightmod'>D</span>
                    </div>
                    {/* ------ */}
                    <span>
                        <Link to={'/LoginAndRegester'} className='link'>
                            <VscSignIn className='iconHeaderSignin' data-aos='zoom-in' data-aos-duration='1200' />
                        </Link>
                        <Link to={'/Basket'} className='link'>
                            <SlBasket className='iconHeaderTrolly' data-aos='zoom-in' data-aos-duration='1200' />
                        </Link>
                        <Link to={'/CallUs'} className='link'>
                            <MdSupportAgent className='iconSupportHeader' data-aos='zoom-in' data-aos-duration='1200' />
                        </Link>
                    </span>
                </div>
                {/* -------------------------------Step Two------------------- */}

                <div className="divHeaderItems">

                    <ul className="mainUlHeader">

                        <Link to={'/Category'} className='link' data-aos='fade' data-aos-duration='1200'>
                            <li ><BiCategory className='iconsItemsHeader' />Categuries</li>
                        </Link>

                        <Link to={'/'} className='link' data-aos='fade' data-aos-duration='1200'>
                            <li> <AiOutlineHome className='iconsItemsHeader' /> Home</li>
                        </Link>

                        <li data-aos='fade' data-aos-duration='1200'>
                            <BsShop className='iconsItemsHeader' /> Shope
                        </li>

                        <Link to={'/Aboutus'} className='link' data-aos='fade' data-aos-duration='1200'>
                            <li><IoBodyOutline className='iconsItemsHeader' />  About us</li>
                        </Link>

                    </ul>
                </div>

            </div >



        </>
    )
}
