import React from 'react'
import './Page404.css'
import { TfiFaceSad } from 'react-icons/tfi'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'



export function Page404() {



    return (
        <>
            <Header />

            <section className='sectionPag404'>

                <TfiFaceSad className='iconSad404' />
                <h2>Oopss..!!</h2>
                <span>I think you lost</span>

            </section>

            <Footer />
        </>
    )
}
