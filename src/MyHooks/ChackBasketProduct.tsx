import React from 'react'
import { storBasket } from '../Redux/Stores/storBasket'

export default function ChackBasketProduct(productID: number): boolean {
    let basketPro = storBasket.getState()
    let existProduct = basketPro.filter(pro => pro.id == productID)
    if (existProduct.length == 0) {
        return true
    } else {
        return false
    }
}
