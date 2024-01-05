import React, { useEffect } from 'react'
import './home.css'
import Header from '../../Components/Header/Header'
import Slidshow from '../../Components/Slidshow/Slidshow'
import TwoPartInfo from '../../Components/TwoPartInfo/TwoPartInfo'
import RandomProduct from '../../Components/RandomProduct/RandomProduct'
import AdvertiseBoxes from '../../Components/AdvertiseBoxes/AdvertiseBoxes'
import ShapTextImg from '../../Components/ShapTextImg/ShapTextImg'
import YourQuestions from '../../Components/YourQuestions/YourQuestions'
import Pagination from '../../Components/Pagination/Pagination'
import Footer from '../../Components/Footer/Footer'
import { AllProduct } from '../../Datas'
import GoUp from '../../Components/GoUp/GoUp'
import WrritAuto from '../../Components/WrritAuto/WrritAuto'


export function Home() {


  return (
    <>
      <GoUp />
      {/* ---------- */}
      <Header />
      {/* <WrritAuto/> */}
      <Slidshow />
      <br />
      <TwoPartInfo />
      <br />
      <RandomProduct />
      <AdvertiseBoxes />
      <ShapTextImg />
      <YourQuestions />
      <br />
      <Pagination props={AllProduct} />
      <br />
      <Footer />

    </>
  )
}
