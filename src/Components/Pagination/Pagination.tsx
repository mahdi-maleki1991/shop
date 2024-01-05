import React, { useEffect, useRef, useState } from 'react'
import './Pagination.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ProductBox } from '../ProductBox/ProductBox'
import { allProductPropsType } from '../../types'




export default function Pagination(paginationProducts:allProductPropsType) {
    
    
    const [boxInEachPage, setboxInEachPage] = useState<number>(6)
    const [allPage, setallPage] = useState<number>(Math.ceil(paginationProducts.props.length / boxInEachPage))
    const [startPagination, setstartPagination] = useState(0)
    const [endPagination, setendPagination] = useState(boxInEachPage)
    const refBoxNumbers = useRef<(HTMLDivElement | null | undefined)[]>([])

    // -------------------------------------------------------------------

    const smallBoxNumberGenerator = (): JSX.Element[] => {
        let arrayBoxPage: Array<string> = []
        for (let i = 0; i < allPage; i++) {
            arrayBoxPage.push('*')
        }
        return (
            arrayBoxPage.map((boxNumber, index) => (
                <div key={index} className="divBoxPageNumberPagination"
                    onClick={() => goToPagePagination(index + 1)}
                    ref={(elem) => refBoxNumbers.current.push(elem)} >
                    {index + 1}
                </div>
            ))
        )
    }

    const goToPagePagination = (page: number) => {
        setstartPagination((page * boxInEachPage) - boxInEachPage)
        setendPagination(page * boxInEachPage)
        boxNumbersMark(page)
        if(window.location.pathname !='/'){
            window.scroll({top:0,behavior:'smooth'})
        }        
    }

    const boxNumbersMark = (page: number) => {
        refBoxNumbers.current.forEach(box => { box?.classList.remove('divBoxPageNumberPaginationActive') })
        refBoxNumbers.current[page - 1]?.classList.add('divBoxPageNumberPaginationActive')
    }

    useEffect(() => {
        boxNumbersMark(1)
    }, [refBoxNumbers])

    // -------------------------------------------------------------------
    // -------------------------------------------------------------------
    return (
        <>

            <div className="divContainerPagination">
                {
                    paginationProducts.props.length > 0 ? (
                        paginationProducts.props.map((product, index) => (
                            index + 1 > startPagination && index + 1 <= endPagination && (
                                <ProductBox key={product.id} props={product} />
                            )
                        ))

                    ) : (
                        <div className="divErrorPagination">
                            EMPTY !
                        </div>
                    )
                }
            </div>

            <div className="divBoxesPagePagination">
                {smallBoxNumberGenerator()}
            </div>

        </>
    )
}
