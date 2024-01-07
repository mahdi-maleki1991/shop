
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
    'https://5.imimg.com/data5/MU/DV/MY-2/family-tents-500x500.png',
    'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/616zsN8uZAL._AC_UY1000_.jpg',
    'https://5.imimg.com/data5/EE/KC/ZF/SELLER-4032621/first-aid-kit-500x500.png',
    'https://m.media-amazon.com/images/I/61tNeogZQNL.jpg',
    'https://m.media-amazon.com/images/I/51OvNvdgzGL._AC_UF1000,1000_QL80_.jpg',
]


///////////////////// CATs //////////////////////

export let allCats: allCatsType = [
    { id: 0, catTittle: 'Clothing', imgAddres: 'https://img.freepik.com/premium-vector/hand-drawn-flat-winter-clothes-essentials-collection_23-2149161299.jpg?w=360' },
    { id: 1, catTittle: 'Defensive', imgAddres: 'https://img.fruugo.com/product/0/53/613164530_max.jpg' },
    { id: 3, catTittle: 'Lighting', imgAddres: 'https://www.kafkamercantile.com/images/products/verylarge/1685458206snowpeak_9936.JPG' },
    { id: 4, catTittle: 'Heating', imgAddres: 'https://images.thdstatic.com/productImages/b58dbfbd-24be-4ffe-935d-3d4e6c090f18/svn/multi-mr-heater-propane-heaters-f232000-64_600.jpg' },
    { id: 5, catTittle: 'Tent', imgAddres: 'https://static-01.daraz.pk/p/80a58ed4b27a5ef4d5a33af8d31a3253.jpg_750x750.jpg_.webp' },
    { id: 6, catTittle: 'Backpack', imgAddres: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/616zsN8uZAL._AC_UY1000_.jpg' },
    { id: 7, catTittle: 'Climbing tool', imgAddres: 'https://5.imimg.com/data5/SELLER/Default/2023/4/302390632/VW/OF/ML/188055628/x-500x500.jpg' },
    { id: 8, catTittle: 'First aid', imgAddres: 'https://5.imimg.com/data5/EE/KC/ZF/SELLER-4032621/first-aid-kit-500x500.png' },
]

///////////////////// basket //////////////////////

// export let basketProduct: productType = []


///////////////////// Product //////////////////////


export let AllProduct: productType = [

    {
        id: 0,
        cat: 'Clothing',
        name: 'Winter Hat',
        imgAddres: 'https://fortnine.ca/media/catalog/product/cache/3106cf6870ef61da8313fd82d69c8643/catalogimages/zan-headgear/trooper-hat-with-fur-brown-wth407.jpg',
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
        imgAddres: 'https://mumcusleather.com/wp-content/uploads/2022/08/Yeni-Proje-18.jpg',
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
        imgAddres: 'https://cdn.thewirecutter.com/wp-content/uploads/2020/03/winter-boots-lowres-9388.jpg?auto=webp&quality=60&width=570',
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
        imgAddres: 'https://jumbougg.com.au/cdn/shop/products/carrumlace-upchestnutsheepskinbootsjumbougg_medium.jpg?v=1658895534',
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
        imgAddres: 'https://www.fourruresgrenier.ca/wp-content/uploads/4981-Rus.jpg',
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
        imgAddres: 'https://img.fruugo.com/product/4/46/698777464_max.jpg',
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
        imgAddres: 'https://sagebrown.co.uk/cdn/shop/products/sagebrown-brown-extra-small-8-5-9-men-s-rabbit-fur-lined-leather-gloves-brown-30300080701613.jpg?v=1664606887',
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
        imgAddres: 'https://contents.mediadecathlon.com/p1861228/79767c581db771cdd7c6d38dd4f479cd/p1861228.jpg?format=auto&quality=70&f=650x0',
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
        imgAddres: 'https://m.media-amazon.com/images/I/61hZQ-P2lYL._AC_UY1000_.jpg',
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
        imgAddres: 'https://media.takealot.com/covers_images/9323d6e377384c148ba401fa8e0febee/s-pdpxl.file',
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
        imgAddres: 'https://contents.mediadecathlon.com/p1878707/4f7d9256f895d3c8991053428555899e/p1878707.jpg?format=auto&quality=70&f=650x0',
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
        imgAddres: 'https://sfycdn.speedsize.com/391acfdf-da58-4e08-9ded-7b61e80c322e/https://www.sealskinz.ca/cdn/shop/products/Starston_Waterproof_Cold_Weather_Mid_Length_Socks_Grey_1-Large.jpg?v=1698420075',
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
        imgAddres: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Damascus_Bowie.jpg/330px-Damascus_Bowie.jpg',
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
        imgAddres: 'https://knifenewsroom.com/wp-content/uploads/2018/01/frcw3453brb.jpg',
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
        imgAddres: 'https://thejamesbrand.au/cdn/shop/files/TJB_23S2_Pike_Sycamore-Stainless_01.jpg?v=1699460643',
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
        imgAddres: 'https://www.karatemart.com/images/products/large/modern-combat-knife-3580642.jpg',
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
        imgAddres: 'https://m.media-amazon.com/images/I/71iuzaXJZWL._AC_UF894,1000_QL80_.jpg',
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
        imgAddres: 'https://img.fruugo.com/product/5/20/441048205_max.jpg',
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
        imgAddres: 'https://www.knifecountryusa.com/store/image/products/magnified/210865_210888.jpg',
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
        imgAddres: 'https://cdn.watersportsoutlet.com/images/1x1/thumbs/fox-40-micro-whistle.700x700.jpg',
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
        imgAddres: 'https://res.cloudinary.com/afs-assets/image/upload/w_560,h_746/q_auto,f_auto/v327102019/product-large/SN8309CN/SN8309CN.jpg',
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










