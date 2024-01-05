import React, { useEffect, useRef, useState } from 'react'
import './WrritAuto.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function WrritAuto() {


    const [wrritAuto, setwrritAuto] = useState<string>('Want to have a great camp???')
    const refDivWrriting = useRef<HTMLDivElement | null>(null)
    // ---------------------------------------

    useEffect(() => {
        Aos.init({ delay: 1000, duration: 1000, once: true })
    }, [])

    let counterWrriting: number = 0;

    const WrriteAutoFunc = () => {
        if (window.location.pathname == '/Category') {
            if (counterWrriting < wrritAuto.length) {
                refDivWrriting.current!.innerHTML += wrritAuto[counterWrriting]
            } else {
                counterWrriting = -1
                refDivWrriting.current!.innerHTML = ''
            }
            counterWrriting++
        } else {
            clearInterval(stopInterValWrriting)
        }
    }

    let stopInterValWrriting: NodeJS.Timeout = setInterval(WrriteAutoFunc, 200)



    // -----------------------------------------------------------------------

    return (
        <>
            <div data-aos='fade' className="divWrritAuto" ref={refDivWrriting}></div>
        </>
    )
}
