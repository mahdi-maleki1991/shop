import React, { useEffect } from 'react'
import './CallUs.css'
import { CiLocationOn, CiTwitter, CiFacebook } from 'react-icons/ci'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { PiTelegramLogoLight } from 'react-icons/pi'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Aos from 'aos'
import 'aos/dist/aos.css'


export function CallUs() {



    useEffect(() => {
        Aos.init({ once: true})
        window.scroll({ top: 250, left: 0, behavior: 'smooth' })
    })



    return (
        <>

            <Header />


            <section className="sectionCallUs">

                <h2 data-aos='zoom-out'data-aos-delay='400'>CONTACT</h2>
                <h3>We would to help!</h3>


                <div className='div2MainBoxKeeperCallUs'>

                    <div className="divLeftCallUs">
                        <input type="text" placeholder='Your Name' className='inputsInCallUs' />
                        <input type="Email" placeholder='Your Email' className='inputsInCallUs' />
                        <textarea className='textEreaInCallUs' placeholder='Message'></textarea>
                        <input type="button" value="Send" className='inputBTNSendCallUs' data-aos='zoom-in-up'data-aos-delay='1000' />
                    </div>



                    <div className="divRightCallUs">

                        <div className='divIconAndTextKeeperCallUs' data-aos='slide-left'>
                            <CiLocationOn className='iconsInCallUs' />
                            <span>Iran, Rasht</span>
                        </div>

                        <div className='divIconAndTextKeeperCallUs' data-aos='slide-left' data-aos-delay='200'>
                            <AiOutlinePhone className='iconsInCallUs' />
                            <span>+989119291271</span>
                        </div>

                        <div className='divIconAndTextKeeperCallUs' data-aos='slide-left'data-aos-delay='300'>
                            <AiOutlineMail className='iconsInCallUs' />
                            <span>mahdi_maleki1991@yahoo.com</span>
                        </div>

                        <div className="divBoxSocialMediaCallUs">
                            <FaInstagram  data-aos='fade-up'data-aos-delay='300'/>
                            <CiTwitter data-aos='fade-up'data-aos-delay='600'/>
                            <CiFacebook data-aos='fade-up'data-aos-delay='900'/>
                            <PiTelegramLogoLight data-aos='fade-up'data-aos-delay='1100'/>
                        </div>

                    </div>


                </div>


            </section>




            <Footer />

        </>
    )
}
