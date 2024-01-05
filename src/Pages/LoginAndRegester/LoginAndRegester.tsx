import React, { useEffect, useRef, useState } from 'react'
import './LoginAndRegester.css'
import { BsSignpost } from 'react-icons/bs'
import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdOutlineMailOutline } from 'react-icons/md'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos'
import 'aos/dist/aos.css'


export function LoginAndRegester() {

    useEffect(() => {
        Aos.init({ once: true })
    })
    
    useEffect(() => {
        window.scroll({ top: 250, left: 0, behavior: 'smooth' })
    },[])

    const [logInAndRegister, setlogInAndRegister] = useState<string>('regester')
    // -----Regester
    const [nameRegester, setnameRegester] = useState<string>('')
    const refNameReg = useRef<HTMLInputElement | null>(null)
    const [cheakName, setcheakName] = useState<boolean>(false)
    // --
    const [usernameReg, setusernameReg] = useState<string>('')
    const refUsernameReg = useRef<HTMLInputElement | null>(null)
    const [cheakuserName, setcheakuserName] = useState<boolean>(false)
    // --
    const [emailReg, setemailReg] = useState<String>('')
    const refEmailReg = useRef<HTMLInputElement | null>(null)
    const [cheakEmail, setcheakEmail] = useState<boolean>(false)
    // --
    const [phoneReg, setphoneReg] = useState<string>('')
    const refPhoneReg = useRef<HTMLInputElement | null>(null)
    const [cheakPhone, setcheakPone] = useState<boolean>(false)
    // --
    const [passReg, setpassReg] = useState<string>('')
    const refPassReg = useRef<HTMLInputElement | null>(null)
    const [cheakPass, setcheakPass] = useState<boolean>(false)
    // --
    const [repassReg, setrepassReg] = useState<string>('')
    const refrePassReg = useRef<HTMLInputElement | null>(null)

    // -----SignIn





    // ---------------------------------------------------------
    useEffect(() => {
        if (nameRegester!?.length == 0) {
            refNameReg.current?.setAttribute('style', 'border: 1px solid rgb(165, 165, 165)')
            setcheakName(false)
        }
        if (nameRegester!?.length > 0 && nameRegester!.length <= 2) {
            refNameReg.current?.setAttribute('style', 'border: 1px solid rgb(238, 162, 162)')
            setcheakName(false)
        }
        if (nameRegester!?.length > 2) {
            refNameReg.current?.setAttribute('style', 'border: 1px solid green')
            setcheakName(true)
        }
    }, [nameRegester])
    // -----
    useEffect(() => {
        if (usernameReg!?.length == 0) {
            refUsernameReg.current?.setAttribute('style', 'border: 1px solid rgb(165, 165, 165)')
            setcheakuserName(false)
        }
        if (usernameReg!?.length > 0 && usernameReg!.length <= 5) {
            refUsernameReg.current?.setAttribute('style', 'border: 1px solid rgb(238, 162, 162)')
            setcheakuserName(false)
        }
        if (usernameReg!?.length > 5) {
            refUsernameReg.current?.setAttribute('style', 'border: 1px solid green')
            setcheakuserName(true)
        }
    }, [usernameReg])
    // -----
    useEffect(() => {
        if (emailReg!?.length == 0) {
            refEmailReg.current?.setAttribute('style', 'border: 1px solid rgb(165, 165, 165)')
            setcheakEmail(false)
        } else {
            if (emailReg!?.length > 15 && emailReg!?.includes('@yahoo.com') || emailReg!?.includes('@gmail.com')) {
                refEmailReg.current?.setAttribute('style', 'border: 1px solid green')
                setcheakEmail(true)
            } else {
                refEmailReg.current?.setAttribute('style', 'border: 1px solid rgb(238, 162, 162)')
                setcheakEmail(false)
            }
        }
    }, [emailReg])
    // -----
    useEffect(() => {
        if (phoneReg?.length == 0) {
            refPhoneReg.current?.setAttribute('style', 'border: 1px solid rgb(165, 165, 165)')
            setcheakPone(false)
        } else {
            if (phoneReg?.startsWith('+98') && phoneReg?.length == 13) {
                refPhoneReg.current?.setAttribute('style', 'border: 1px solid green')
                setcheakPone(true)
            } else {
                refPhoneReg.current?.setAttribute('style', 'border: 1px solid rgb(238, 162, 162)')
                setcheakPone(false)
            }
        }
    }, [phoneReg])
    // -----
    useEffect(() => {
        if (passReg?.length == 0) {
            refPassReg.current?.setAttribute('style', 'border: 1px solid rgb(165, 165, 165)')
            refrePassReg.current?.setAttribute('style', 'border: 1px solid rgb(165, 165, 165)')
            setcheakPass(false)
        } else {
            if (passReg?.length > 6 && repassReg?.length > 6 && passReg == repassReg) {
                refPassReg.current?.setAttribute('style', 'border: 1px solid green')
                refrePassReg.current?.setAttribute('style', 'border: 1px solid green')
                setcheakPass(true)
            } else {
                refPassReg.current?.setAttribute('style', 'border: 1px solid rgb(238, 162, 162)')
                refrePassReg.current?.setAttribute('style', 'border: 1px solid rgb(238, 162, 162)')
                setcheakPass(false)
            }
        }
    }, [passReg, repassReg])

    const submitRegester = () => {
        if (cheakName && cheakEmail && cheakPhone && cheakuserName && cheakPass) {
            toast.success('regestary was Successful', { theme: 'dark' })
            clearInputsReg()
        } else {
            toast.error('The informations have problem', { theme: 'dark' })
        }
    }
    const clearInputsReg = () => {
        setnameRegester('')
        refNameReg.current!.value = ''
        setusernameReg('')
        refUsernameReg.current!.value = ''
        setemailReg('')
        refEmailReg.current!.value = ''
        setphoneReg('')
        refPhoneReg.current!.value = ''
        setpassReg('')
        refPassReg.current!.value = ''
        setrepassReg('')
        refrePassReg.current!.value = ''
    }

    // ---------------------------------------------------------
    return (
        <>
            <Header />

            <ToastContainer />

            <section className="sectionLoginRegester">

                <div className="divMainLoginRegester">


                    {/* ----Header---- */}
                    <div className="divTopHeaderLogInBox">
                        <span onClick={() => setlogInAndRegister('regester')} data-aos='fade-down'
                            style={logInAndRegister == 'regester' ? { backgroundColor: 'rgb(90, 90, 90)', color: 'white' } : {}}>
                            Regester
                        </span>
                        <span onClick={() => setlogInAndRegister('login')} data-aos='fade-down' data-aos-delay='200'
                            style={logInAndRegister == 'login' ? { backgroundColor: 'rgb(90, 90, 90)', color: 'white' } : {}} >
                            Sign In
                        </span>
                    </div>

                    {/* ---Body LogIn---- */}


                    {
                        logInAndRegister == 'login' ? (
                            <div className="divBodyForLogInTab">
                                <h2 >Sign in</h2>
                                <BsSignpost className='iconMainForLogIn' />
                                <div className="divInputLoginKeeper">
                                    <input type="text" className='inputsLogIn' placeholder='Usenrname' />
                                    <AiOutlineUser className='iconsUserPasInInputLogin' />
                                </div>
                                <div className="divInputLoginKeeper">
                                    <input type="password" className='inputsLogIn' placeholder='Password' />
                                    <RiLockPasswordLine className='iconsUserPasInInputLogin' />
                                </div>
                                <input type="button" value="LogIn" className='btnMainLogin' />
                                <span>Forget Your Password?</span>
                            </div>
                        ) : (



                            <div className="divBodyForRegesterTab">
                                <h2 data-aos='flip-up' data-aos-delay='500'>Regester</h2>
                                <div className="divInputLoginKeeper" data-aos='slide-right' data-aos-delay='100'>
                                    <input type="text" className='inputsLogIn' ref={refNameReg}
                                        onKeyUp={(e) => setnameRegester(e.currentTarget.value)} placeholder='Name' />
                                    <AiOutlineUser className='iconsUserPasInInputLogin' />
                                </div>
                                <div className="divInputLoginKeeper" data-aos='slide-right' data-aos-delay='200'>
                                    <input type="text" className='inputsLogIn' ref={refUsernameReg}
                                        placeholder='Username' onKeyUp={(e) => setusernameReg(e.currentTarget.value)} />
                                    <AiOutlineUser className='iconsUserPasInInputLogin' />
                                </div>
                                <div className="divInputLoginKeeper" data-aos='slide-right' data-aos-delay='300'>
                                    <input type="email" className='inputsLogIn' ref={refEmailReg}
                                        placeholder='Email' onKeyUp={(e) => setemailReg(e.currentTarget.value)} />
                                    <MdOutlineMailOutline className='iconsUserPasInInputLogin' />
                                </div>
                                <div className="divInputLoginKeeper" data-aos='slide-right' data-aos-delay='400'>
                                    <input type="text" className='inputsLogIn' ref={refPhoneReg}
                                        placeholder='Phone (+98)' onKeyUp={(e) => setphoneReg(e.currentTarget.value)} />
                                    <AiOutlinePhone className='iconsUserPasInInputLogin' />
                                </div>
                                <div className="divInputLoginKeeper" data-aos='slide-right' data-aos-delay='500'>
                                    <input type="password" className='inputsLogIn' ref={refPassReg}
                                        placeholder='Password' onKeyUp={(e) => setpassReg(e.currentTarget.value)} />
                                    <RiLockPasswordLine className='iconsUserPasInInputLogin' />
                                </div>
                                <div className="divInputLoginKeeper" data-aos='slide-right' data-aos-delay='600'>
                                    <input type="password" className='inputsLogIn' ref={refrePassReg}
                                        placeholder='R-password' onKeyUp={(e) => setrepassReg(e.currentTarget.value)} />
                                    <RiLockPasswordLine className='iconsUserPasInInputLogin' />
                                </div>
                                <input type="button" value="Regester" className='btnMainRegester' onClick={submitRegester} />
                            </div>


                        )

                    }



                </div>

            </section>


            <Footer />

        </>
    )

}













