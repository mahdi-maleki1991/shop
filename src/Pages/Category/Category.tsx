import React, { useEffect } from 'react'
import './Category.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import { allCats } from '../../Datas'
import Aos from 'aos'
import 'aos/dist/aos.css'
import WrritAuto from '../../Components/WrritAuto/WrritAuto'


export function Category() {

    window.scroll({top:0,behavior:'smooth'})
    
    useEffect(() => {
        Aos.init()
    })
    

    return (
        <>
            <Header />
            <WrritAuto />

            <section className="sectionCategoryPage">

                {
                    allCats.map(cat => (

                        <Link key={cat.id} className='link' to={`/ProductsInCat/${cat.catTittle}`}
                            data-aos='fade'>
                            <div className="divBoxCategory">
                                <img src={cat.imgAddres} className='imgBoxCat' />
                                <span className='spanBoxCatTittle'>{cat.catTittle}</span>
                            </div>
                        </Link>

                    ))
                }

            </section>



            <Footer />
        </>
    )
}
