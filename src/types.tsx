
// ---------- SlidShoe Type

export type slidshowType = Array<string>

// ----------allCatsType
export type allCatsType = Array<
    {
        id: number;
        catTittle: string;
        imgAddres: string;

    }
>
// ---------- Product Type

export type productType = Array<{
    id: number;
    cat: string;
    name: string;
    imgAddres: string
    star: number;
    price: number;
    width: string;
    height: string;
    weight: string;
    ingradiant: string;
    color: string[];
    discount: number;
    tax: number;
    des: string
}>
// ------allproductProps
export type allProductPropsType = {
    props: Array<
        {
            id: number;
            cat: string;
            name: string;
            imgAddres: string
            star: number;
            price: number;
            width: string;
            height: string;
            weight: string;
            ingradiant: string;
            color: string[];
            discount: number;
            tax: number;
        }

    >

}
// export type allCatAndProductType = Array<
//     {
//         id: number;
//         catTittle: string;
//         imgAddres: string;
//         catProducts: Array<
//             {
//                 id: number;
//                 name: string;
//                 imgAddres: string
//                 star: number;
//                 price: number;
//                 width: string;
//                 height: string;
//                 weight: string;
//                 ingradiant: string;
//                 color: string[];
//                 discount: number;
//                 tax: number;
//             }
//         >
//     }
// >



// ---------- question & AnswareType

export type questionAnswarType = Array<{
    id: number;
    question: string;
    answare: string;
}>

// ---------- Product Box By Props
export type productProps = {
    props: {
        id: number;
        cat: string;
        name: string;
        imgAddres: string
        star: number;
        price: number;
        width: string;
        height: string;
        weight: string;
        ingradiant: string;
        color: string[];
        discount: number;
        tax: number;
    }
}

// ---------- 

























