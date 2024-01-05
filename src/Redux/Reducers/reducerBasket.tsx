
import { productType } from "../../types";
import { AllProduct } from "../../Datas";

const initiatStore: productType = []

export const reducerBasket = (state = initiatStore, action: { type: string, id?: number }) => {

    switch (action.type) {
        case 'pushe':
            const mainProduct = AllProduct.find(product => product.id == action.id)
            mainProduct &&
            state.push(mainProduct)
            return state
            break;
        case 'delete':
            const xx = state.filter(p => p.id != action.id)
            state = []
            state = JSON.parse(JSON.stringify(xx))
            return state
            break;
        case 'deleteAll':
            return state = []
            break;
        default:
            return state;
            break;

    }

}



