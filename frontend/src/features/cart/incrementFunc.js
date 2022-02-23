import { increment } from './counterSlice'; //increments numbers on the cart icon in the navbar
import { incrementCart } from './cartSlice'; //adds products to the cart
import { incrementProd } from './prodSlice'; //increment counter of product in cart

export function incrementFunc(product, inCart, dispatch) {

    let check = false;

    if (inCart.length !== 0) {
        inCart.map(item => {
            if (item.id === product.id) {
                check = true
            }
        })
        if (check) {
            dispatch(increment());
            dispatch(incrementProd(product.id))
        } else if (!check) {
            dispatch(increment());
            dispatch(incrementCart(product))
        }
    } else {
        dispatch(increment());
        dispatch(incrementCart(product))
    }

}