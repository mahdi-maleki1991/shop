import React, { useEffect } from 'react'
import './AdvertiseBoxes.css'
import { GiHiking, GiCampingTent } from 'react-icons/gi'
import { SiYourtraveldottv } from 'react-icons/si'
import { MdOutlineTour, MdOutlineContactSupport } from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function AdvertiseBoxes() {

    useEffect(() => {
        Aos.init({ once: true })
    })

    return (
        <>


            <section className="sectionAdvertiseBox">

                <div className="divBoxAdvertise" data-aos='zoom-in'>
                    <GiHiking className='iconsInBoxAdvertisement' />
                    <h5>HIKKING</h5>
                    <span>
                        Duis aute irure dolor in reprehenderit in pariatu
                        voluptate velit essecil.
                    </span>
                </div>

                <div className="divBoxAdvertise"data-aos='zoom-in'>
                    <SiYourtraveldottv className='iconsInBoxAdvertisement' />
                    <h5>TRAVELING</h5>
                    <span>
                        Duis aute irure dolor in pariatu
                        voluptate velit essecil.
                    </span>
                </div>

                <div className="divBoxAdvertise"data-aos='zoom-in'>
                    <MdOutlineTour className='iconsInBoxAdvertisement' />
                    <h5>TOURES</h5>
                    <span>
                        Duis aute irure dolor in pariatu
                        voluptate velit essecil aute irure dolor.
                    </span>
                </div>

                <div className="divBoxAdvertise"data-aos='zoom-in'>
                    <MdOutlineContactSupport className='iconsInBoxAdvertisement' />
                    <h5>SUPPORTING</h5>
                    <span>
                        Duis aute irure dolor in pariatu
                        voluptate velit essecil.
                    </span>
                </div>

                <div className="divBoxAdvertise"data-aos='zoom-in'>
                    <GiCampingTent className='iconsInBoxAdvertisement' />
                    <h5>CAMPING</h5>
                    <span>
                        Duis aute irure dolor in reprehenderit in pariatu
                        voluptate .
                    </span>
                </div>

            </section>



        </>
    )
}
