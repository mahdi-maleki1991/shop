


let initiatState: string = 'true'
export const reducerNightMode = (state = initiatState, action: { type: string }) => {

    switch (action.type) {
        case 'false':
            return 'true'
            break;
        case 'true':
            return 'false'
            break;
        default:
            return state
            break
    }

}


