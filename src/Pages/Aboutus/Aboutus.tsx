import React, { useEffect } from 'react'
import './Aboutus.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import GoUp from '../../Components/GoUp/GoUp'


export function Aboutus() {

    useEffect(() => {
        Aos.init({once:true})
    })

    return (
        <>
        <GoUp />
            <Header />




            <section className="sectionAboutusMain">


                <div className="divRightAboutusPage">
                    {/* <img src="./../../public/Images/me.jpg" className='imgAboutusMe' data-aos='slide-right' /> */}
                </div>

                <div className="divLeftAboutusPage"data-aos='zoom-in'>

                    <span>Mahdi's website</span>
                    <h2 >About Us</h2>

                    <p data-aos='slide-left'>
                        L orem ipsum dolor sit amet, cdipisicing elit. Veritatis, at.
                        Lorem ipsum dolor sit amet, consectetur adipisilit.
                        Lorem ipsum dolor sit amet, consectetur adipitatis, at.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritat
                        Lorem ipsum dolor sit amet, consecteng elit. Veritatis, at.                        Lorem ipsum dolor sit amet, consectetur adipitatis, at.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritat
                        Lorem ipsum dolor sit amet, consecteng elit. Veritatis, at.                        Lorem ipsum dolor sit amet, consectetur adipitatis, at.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritat
                        Lorem ipsum dolor sit amet, consecteng elit. Veritatis, at.
                    </p>


                    <div className="divShapAboutus1"></div>
                    <div className="divShapAboutus2"></div>

                </div>

            </section>





            <Footer />
        </>
    )
}

