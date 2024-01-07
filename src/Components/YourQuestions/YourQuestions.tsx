import React, { useEffect, useRef, useState } from 'react'
import './YourQuestions.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Row, Container } from 'react-bootstrap'
import { GoSearch } from 'react-icons/go'
import { questionAnswarArray } from '../../Datas'
import { questionAnswarType } from '../../types'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function YourQuestions() {


    const [stateQuestionAnswar, setstateQuestionAnswar] = useState<questionAnswarType>(questionAnswarArray)
    const refAnswars = useRef<(HTMLElement | null)[]>([])

    useEffect(() => {
        Aos.init({
            once:true,
        })
    })


    // -------------------------------------------------------------------


    const generateQuestionAnswar = (): JSX.Element[] => {

        const openCloseQuestionHandler = (id: number) => {
            let mainHeight = refAnswars.current[id]?.scrollHeight
            if (refAnswars.current[id]?.hasAttribute('style')) {
                refAnswars.current[id]?.removeAttribute('style')
            } else {
                refAnswars.current[id]?.setAttribute('style',
                    `height:${mainHeight}px;`)
            }
        }

        return (
            stateQuestionAnswar.map(QA => (
                <div key={QA.id} className="divOneQandOneAns" data-aos='flip-right'>

                    <div className="divQuestionOnly" onClick={() => openCloseQuestionHandler(QA.id)}>
                        {QA.question}
                    </div>
                    <div className="divAnswerOnlyDeactive"
                        data-open={false} ref={(elem) => refAnswars.current.push(elem)}>
                        {QA.answare}
                    </div>

                </div>
            ))
        )
    }






    const searchQuestionHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {

        let inputSearchVal = (event.target as HTMLInputElement).value

        if (inputSearchVal.length > 2) {
            refAnswars.current.forEach(element => {
                if (element?.innerText.toLowerCase().includes(inputSearchVal.toLowerCase())) {
                    element.parentElement?.setAttribute('style', 'border: 1px solid rgb(53, 69, 138)')
                } else {
                    element!.parentElement?.removeAttribute('style')
                }
            })
        } else {
            refAnswars.current.forEach(element => {
                element!.parentElement?.removeAttribute('style')
            })
        }
    }





    // -------------------------------------------------------------------
    // -------------------------------------------------------------------
    // -------------------------------------------------------------------
    return (
        <>

            <section className="YourQuestionsMainSection">

                <h2 data-aos='fade'>Find frequently asked questions by keyword</h2>
                <div className="divsearchInputKeeper">
                    <GoSearch className='iconSearch' />
                    <input type="text" placeholder='Search...' onKeyUp={(event) => searchQuestionHandler(event)} />
                </div>

                <div className="divBoxQandAMain">
                    {
                        // -----Generating Questions And Answares
                        generateQuestionAnswar()
                    }
                    <img src="https://static.vecteezy.com/system/resources/previews/018/930/780/original/white-question-mark-on-blue-glossy-circle-shape-user-interface-theme-3d-icon-render-illustration-isolated-png.png" className='shap3SecQA' />
                    <img src="https://static.vecteezy.com/system/resources/previews/012/422/186/original/blob-design-shape-with-transparent-background-png.png" className='shap3SecQASmall' />
                    <img src="https://www.pngall.com/wp-content/uploads/5/Shape-PNG-Image.png" className='shap3SecQASmall2' />
                </div>

            </section>

        </>
    )

}
