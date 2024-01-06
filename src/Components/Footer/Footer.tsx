import React, { useEffect } from 'react'
import './Footer.css'
import { AiOutlineUser } from 'react-icons/ai'
// import { SlBasket } from 'react-icons/sl'
import { MdSupportAgent } from 'react-icons/md'
import { VscSignIn } from 'react-icons/vsc'
import { BiCategory } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { BsShop } from 'react-icons/bs'
import { IoBodyOutline } from 'react-icons/io5'
import { SlBasketLoaded } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'



export default function Footer() {

    useEffect(() => {
        Aos.init({
            duration:500,
            once:true,
            offset:0,
        })
    })


    return (
        <>

            <section className="secMainFooter">

                <div className='div2boxkeeperFooter'>

                    <div className="divBoxOneFooter">
                        <div className="divBoxFooterOneOne">
                            <h3> Camping ... </h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                                Lorem ipsum dolor, sit amet consectetur adipisicing.
                            </p>
                        </div>

                        <div className="divBoxFooterOneTwo">

                            <ul className="ulOneFooter">

                                <Link to={'/Category'} className='link'>
                                    <li> <BiCategory /> Categury</li>
                                </Link>

                                <Link to={'/'} className='link'>
                                    <li> <AiOutlineHome /> Home</li>
                                </Link>

                                <li> <BsShop /> Shop</li>

                                <Link to={'/Aboutus'} className='link'>
                                    <li> <IoBodyOutline /> About us</li>
                                </Link>

                            </ul>

                            <ul className="ulTowFooter">
                                <Link to={'/CallUs'} className='link'>
                                    <li> <MdSupportAgent /> Call us</li>
                                </Link>
                                <Link to={'/Basket'} className='link'>
                                    <li> <SlBasketLoaded /> Basket</li>
                                </Link>
                                <Link to={'/LoginAndRegester'} className='link'>
                                    <li> <VscSignIn /> Log In</li>
                                </Link>
                            </ul>

                            <ul className="ulTowFooter">
                                <Link to={'/CallUs'} className='link'>
                                    <li> <MdSupportAgent /> Call us</li>
                                </Link>
                                <Link to={'/Basket'} className='link'>
                                    <li> <SlBasketLoaded /> Basket</li>
                                </Link>
                                <Link to={'/LoginAndRegester'} className='link'>
                                    <li> <VscSignIn /> Log In</li>
                                </Link>
                            </ul>

                        </div>

                    </div>

                    <div className="divBoxTwoFooter">

                        <h2> Instant registration </h2>

                        <div className="divInputKeeprtFooter" data-aos='slide-right' >
                            <input type="text" className='inputsInFooter' placeholder='Username' />
                            <AiOutlineUser className='iconsInputFooter' />
                        </div>

                        <div className="divInputKeeprtFooter"data-aos='slide-right'data-aos-delay='100'>
                            <input type="text" className='inputsInFooter' placeholder='Email' />
                            <AiOutlineUser className='iconsInputFooter' />
                        </div>

                        <div className="divInputKeeprtFooter"data-aos='slide-right'data-aos-delay='200'>
                            <input type="text" className='inputsInFooter' placeholder='Password' />
                            <AiOutlineUser className='iconsInputFooter' />
                        </div>

                        <div className="divInputKeeprtFooter"data-aos='slide-right'data-aos-delay='300'>
                            <input type="text" className='inputsInFooter' placeholder='R-password' />
                            <AiOutlineUser className='iconsInputFooter' />
                        </div>

                        <input type="button" value="Sign In" className='btnSigninFastFooter'data-aos='zoom-in-up' />

                    </div>
                </div>

                <div className="divBoxThreeFooter">
                    <img src="https://png.pngtree.com/element_our/sm/20180515/sm_5afaf0b15875b.jpg" className='img1Footer' />
                    <span>this Site is stablished by Mahdi Maleki</span>
                    <span>Email : mahdi_maleki1991@yahoo.com</span>
                </div>

            </section>



        </>
    )
}
