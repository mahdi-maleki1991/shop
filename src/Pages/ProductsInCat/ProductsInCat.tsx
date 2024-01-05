import React, { useEffect, useState } from 'react'
import './ProductsInCat.css'
import { useParams } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { ProductBox } from '../../Components/ProductBox/ProductBox'
import { AllProduct } from '../../Datas'
import Pagination from '../../Components/Pagination/Pagination'
import { productType } from '../../types'
// qarar hastesh ke dar in qesmat mahsoolat ra dar pagination begozarim...
//filter qeymat va setare va discount va ... sakhte shavad

export function ProductsInCat() {

window.scroll({top:0,behavior:'smooth'})
    const [relatadProduct, setrelatadProduct] = useState<any>()
    let parametrs = useParams()

    useEffect(() => {
        let temprtoryArray: productType = AllProduct.filter(product => product.cat == parametrs.catTittle)
        setrelatadProduct(temprtoryArray)
    }, [])

    // ----------------------------------------------------------
    // ----------------------------------------------------------

    return (
        <>
            <Header />

            <section className='sectionProductsInCat'>
                {
                    relatadProduct != undefined &&
                    <Pagination props={relatadProduct} />
                }
            </section>

            <Footer />
        </>
    )
}
