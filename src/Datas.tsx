
import { productType } from "./types"
import { slidshowType } from "./types"
import { questionAnswarType } from "./types"
import { allCatsType } from "./types"




// --------------------------------------------------------------------------------
///////////////////// Slid Show Datas ////////////////////

// export let slidShowData: Array<{ id: number; url: string, title: string }> = [
//     { id: 0, url: './../Files/SlidShowIMG/s1.jpg', title: '00' },
//     { id: 1, url: './../Files/SlidShowIMG/s2.jpg', title: '11' },
//     { id: 2, url: './../Files/SlidShowIMG/s3.jpg', title: '22' },

// ]

export let slidShowData: slidshowType = [
    './../Images/SlidShow/1.jpg',
    './../Images/SlidShow/2.jpg',
    './../Images/SlidShow/3.jpg',
    './../Images/SlidShow/4.jpg',
    './../Images/SlidShow/5.jpg',
]


///////////////////// CATs //////////////////////

export let allCats: allCatsType = [
    { id: 0, catTittle: 'Clothing', imgAddres: './../Images/Cat/c1.jpg' },
    { id: 1, catTittle: 'Defensive', imgAddres: './../Images/Cat/c2.jpg' },
    { id: 3, catTittle: 'Lighting', imgAddres: './../Images/Cat/c3.jpg' },
    { id: 4, catTittle: 'Heating', imgAddres: './../Images/Cat/c4.jpg' },
    { id: 5, catTittle: 'Tent', imgAddres: './../Images/Cat/c5.jpg' },
    { id: 6, catTittle: 'Backpack', imgAddres: './../Images/Cat/c6.jpg' },
    { id: 7, catTittle: 'Climbing tool', imgAddres: './../Images/Cat/c7.jpg' },
    { id: 8, catTittle: 'First aid', imgAddres: './../Images/Cat/c8.jpg' },
]

///////////////////// basket //////////////////////

// export let basketProduct: productType = []


///////////////////// Product //////////////////////


export let AllProduct: productType = [

    {
        id: 0,
        cat: 'Clothing',
        name: 'Winter Hat',
        imgAddres: './../Images/Products/1.jpg',
        star: 4,
        price: 200,
        width: '30 Cm',
        height: '50 Cm',
        weight: '110 g',
        ingradiant: 'Cloth',
        color: [],
        discount: 0,
        tax: 2,
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 1,
        cat: 'Clothing',
        name: 'Winter Hat',
        imgAddres: './../Images/Products/2.jpg',
        star: 4,
        price: 200,
        width: '30 Cm',
        height: '50 Cm',
        weight: '110 g',
        ingradiant: 'Cloth',
        color: [],
        discount: 0,
        tax: 2,
        des: 'Lorem ipsum dolor, sit amet consectetur.'
    },
    {
        id: 2,
        cat: 'Clothing',
        name: 'Winter boots',
        imgAddres: './../Images/Products/3.jpg',
        star: 5,
        price: 1600,
        width: '40 Cm',
        height: '30 Cm',
        weight: '460 g',
        ingradiant: 'Plastik',
        color: [],
        discount: 10,
        tax: 4,
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,amet consectetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 3,
        cat: 'Clothing',
        name: 'Winter boots',
        imgAddres: './../Images/Products/4.jpg',
        star: 5,
        price: 2700,
        width: '43 Cm',
        height: '50 Cm',
        weight: '630 g',
        ingradiant: 'Plastik',
        color: [],
        discount: 4,
        tax: 5,
        des: 'Lorem ipsum dolor, sit ameticing elit. Possimus, ipsam. consectetur adipisicing elit. Possimus, ipsam. consectetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 4,
        cat: 'Clothing',
        name: 'Winter Scarf',
        imgAddres: './../Images/Products/5.jpg',
        star: 5,
        price: 1400,
        width: '140 Cm',
        height: '57 Cm',
        weight: '170 g',
        ingradiant: 'Cloth',
        color: [],
        discount: 2,
        tax: 5,
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, ipsam. Possimus, ipsam. consectetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 5,
        cat: 'Clothing',
        name: 'Winter Scarf',
        imgAddres: './../Images/Products/6.jpg',
        star: 3,
        price: 1600,
        width: '60 Cm',
        height: '57 Cm',
        weight: '130 g',
        ingradiant: 'Cloth',
        color: [],
        discount: 0,
        tax: 2,
        des: 'Lorem tetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 6,
        cat: 'Clothing',
        name: 'Gloves',
        imgAddres: './../Images/Products/7.jpg',
        star: 3,
        price: 130,
        width: '60 Cm',
        height: '57 Cm',
        weight: '130 g',
        ingradiant: 'Cloth',
        color: [],
        discount: 0,
        tax: 2,
        des: 'Lorem tetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 7,
        cat: 'Clothing',
        name: 'Gloves',
        imgAddres: './../Images/Products/8.jpg',
        star: 3,
        price: 130,
        width: '60 Cm',
        height: '57 Cm',
        weight: '130 g',
        ingradiant: 'Cloth',
        color: [],
        discount: 5,
        tax: 2,
        des: 'Lorem tetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 8,
        cat: 'Clothing',
        name: 'Gloves',
        imgAddres: './../Images/Products/9.jpg',
        star: 3,
        price: 150,
        width: '60 Cm',
        height: '57 Cm',
        weight: '130 g',
        ingradiant: 'Cloth & Plastik',
        color: [],
        discount: 5,
        tax: 2,
        des: 'Lorem tetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 9,
        cat: 'Clothing',
        name: 'socks',
        imgAddres: './../Images/Products/10.jpg',
        star: 5,
        price: 150,
        width: '30 Cm',
        height: '57 Cm',
        weight: '60 g',
        ingradiant: 'Cloth',
        color: [],
        discount: 3,
        tax: 1,
        des: 'Lorem tetur.isicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 10,
        cat: 'Clothing',
        name: 'socks',
        imgAddres: './../Images/Products/11.jpg',
        star: 1,
        price: 120,
        width: '30 Cm',
        height: '57 Cm',
        weight: '60 g',
        ingradiant: 'Cloth',
        color: [],
        discount: 0,
        tax: 1,
        des: 'Lorem tetur.isicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 11,
        cat: 'Clothing',
        name: 'socks',
        imgAddres: './../Images/Products/12.jpg',
        star: 1,
        price: 120,
        width: '30 Cm',
        height: '57 Cm',
        weight: '60 g',
        ingradiant: 'Cloth',
        color: [],
        discount: 0,
        tax: 1,
        des: 'Lorem tetur.isicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimus, ipsam.'
    },
    // -----------------------
    {
        id: 12,
        cat: 'Defensive',
        name: 'Knif',
        imgAddres: './../Images/Products/13.jpg',
        star: 4,
        price: 350,
        width: '20 Cm',
        height: '23 Cm',
        weight: '180 g',
        ingradiant: 'Iron',
        color: [],
        discount: 0,
        tax: 1,
        des: 'Lorem teturur adipisicing elit. Possimtetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 13,
        cat: 'Defensive',
        name: 'Knif',
        imgAddres: './../Images/Products/14.jpg',
        star: 5,
        price: 320,
        width: '20 Cm',
        height: '23 Cm',
        weight: '180 g',
        ingradiant: 'Iron',
        color: [],
        discount: 12,
        tax: 1,
        des: 'Lorem teturur adipisicing elit. Possimtetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 14,
        cat: 'Defensive',
        name: 'Knif',
        imgAddres: './../Images/Products/15.jpg',
        star: 3,
        price: 250,
        width: '20 Cm',
        height: '23 Cm',
        weight: '180 g',
        ingradiant: 'Iron',
        color: [],
        discount: 0,
        tax: 1,
        des: 'Lorem teturur adipisicing elit. Possimtetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 15,
        cat: 'Defensive',
        name: 'Knif',
        imgAddres: './../Images/Products/16.jpg',
        star: 2,
        price: 650,
        width: '20 Cm',
        height: '23 Cm',
        weight: '180 g',
        ingradiant: 'Iron',
        color: [],
        discount: 0,
        tax: 4,
        des: 'Lorem teturur elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 17,
        cat: 'Defensive',
        name: 'Ax',
        imgAddres: './../Images/Products/18.jpg',
        star: 5,
        price: 870,
        width: '20 Cm',
        height: '93 Cm',
        weight: '1.100 KG',
        ingradiant: 'Iron & Wood',
        color: [],
        discount: 4,
        tax: 4,
        des: 'Lorem teturur cing elit. Possimtetur adipisicing elit. Possimtetur adipisicing elit. Possimus, ipsam.'
    },
    {
        id: 18,
        cat: 'Defensive',
        name: 'Ax',
        imgAddres: './../Images/Products/19.jpg',
        star: 4,
        price: 970,
        width: '20 Cm',
        height: '93 Cm',
        weight: '1.300 KG',
        ingradiant: 'Iron',
        color: [],
        discount: 10,
        tax: 8,
        des: 'Lorem teturur adipisicing elit. Possimtetur adipisPossimtetur adipis icing elit. Possi'
    },
    {
        id: 19,
        cat: 'Defensive',
        name: 'Ax',
        imgAddres: './../Images/Products/20.jpg',
        star: 5,
        price: 1070,
        width: '20 Cm',
        height: '93 Cm',
        weight: '1.200 KG',
        ingradiant: 'Iron',
        color: [],
        discount: 0,
        tax: 2,
        des: 'Lorem teturur adipisicing elit. Possimtetur adipisicing Possimtetur adipisicing Possimtetur adipisicing Possimtetur adipisicing Possimtetur adipisicing Possimtetur adipisicing Possimtetur adipisicing Possimtetur adipisicing elit. Possi'
    },
    {
        id: 20,
        cat: 'Defensive',
        name: 'Whistle',
        imgAddres: './../Images/Products/21.jpg',
        star: 1,
        price: 990,
        width: '3',
        height: '4',
        weight: '18 g',
        ingradiant: 'Plastik',
        color: [],
        discount: 0,
        tax: 0,
        des: 'Lorem teturur adipisicing Possimtetur adipisicing elit.'
    },
    {
        id: 21,
        cat: 'Defensive',
        name: 'Whistle',
        imgAddres: './../Images/Products/22.jpg',
        star: 5,
        price: 112,
        width: '2 Cm',
        height: '9 Cm',
        weight: '70 g',
        ingradiant: 'Iron',
        color: [],
        discount: 2,
        tax: 1,
        des: 'Lorem teturur adipisicing elit.adipisicing Possimtetur adipisicing Possimtetur adipisicing Possimtetur adipisicing Possimtetur adipisicing Possimtetur adipisicing Possimtetur adipisicing elit. Possi'
    },


]



/////////////////////  Question & answare  //////////////////////

export let questionAnswarArray: questionAnswarType = [
    {
        id: 0,
        question: 'What things do you need to take when you go camping?',
        answare: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        `
    },
    {
        id: 1,
        question: 'Do you need a permit to go camping in your country?',
        answare: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        Lorem ipsum dolor, sit amet consectetur adipis, fugiat!       
        Lorem ipsum dolor, sit amet consecing elit. Facilis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis.
        Lorem ipsum dolor, sit amet consectetu.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugia.
        `
    },
    {
        id: 2,
        question: 'Do you worry about any animals when you go camping? Which ones?',
        answare: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        Lorem ipsum dolor.
        `
    },
    {
        id: 3,
        question: 'Do you know how to make a campfire? How do you do it?',
        answare: `
        Lorem ipsum dolor, sit amet.mahdi
        `
    },
    {
        id: 4,
        question: 'What activities do you like to do when camping?',
        answare: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        `
    },
    {
        id: 5,
        question: 'Do you like to sleep in a tent or just in a sleeping bag looking at the stars?',
        answare: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        Lorem ipsum dolor, scing elit. Facilis, fugiat!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        `
    },
    {
        id: 6,
        question: 'What is the longest amount of time you have camped for?',
        answare: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fa
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
        Lorem ipsum doloctetur adipisicing elit. Facilis, fugiat!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Lorem ipsum dolor, sit amet conseelit. Facilis, fugiat!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        `
    },
    {
        id: 7,
        question: 'What kinds of food do you eat when you camp? How do you cook?',
        answare: `
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, fugiat!
        Lorem ipsum dolor, sit amet consectetur adipisicing elitis.
        Lorem ipsum dolor, sit amet consectetur ...
        `
    },

]


/////////////////////    //////////////////////










