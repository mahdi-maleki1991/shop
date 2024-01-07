import React, { useEffect } from 'react'
import './ShapTextImg.css'
import { RiBookReadLine } from 'react-icons/ri'
import Aos from 'aos'
import 'aos/dist/aos.css'

type users = { id: number; name: string; username: string; phone: string; skills: {} }


export default function ShapTextImg() {

    useEffect(() => {
        Aos.init({ once: true })
    })

    return (
        <>

            <section className="sectionShapTextImg">

                <img src="https://assets.terrapass.com/wp-content/uploads/2017/08/bigstock-Hiking-people-hikers-couple-on-191683519.jpg" className='imgShopTextImgMain' />
                <img src="https://wordee.netlify.app/image/flame-christmas-blue-background.png" className='imgShopTextImg2' />
                <div className="divCircleShape"></div>


                <div className="divBoxInfoShape">
                    <h2 data-aos='slide-right'>Do you interested jurny?</h2>
                    <p data-aos='slide-right'>
                        Habitant morbi tristique senectus et.
                        Nec dui nunc mattis enimllus.
                        Semper auctor neque vitae  quam
                        pellentesque nec nam aliquam.
                        Nec dui nunc mattis enim ut tellus.
                        Semper auctor ntempus quam
                        Semper auctor neque vitae tempus quam
                        Semper auctor neque vita
                        Semper auctor neque vitae tempus quam
                        pellen aliquam                    Semper auctor neque vitae tempus quam
                        Semper auctor neque vita
                        Semper auctor neque vitae tempus quam
                        pellen aliquam.
                    </p>
                    <div className='w-100 d-flex justify-content-end'>
                        <button className='btnReadMoreShap' data-aos='zoom-in-up'>
                            read more
                            <RiBookReadLine style={{ fontSize: 24 }} />
                        </button>
                    </div>
                </div>


            </section>


        </>
    )
}


