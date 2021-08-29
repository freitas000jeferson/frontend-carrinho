import IActionStore from "../../interfaces/IActionStore";
import IProduct from "../../interfaces/IProduct";

export function addProductCar(product:IProduct, qtd:number): IActionStore {
    return {
        type: 'ADD_PRODUCT_CAR',
        payload: [product, qtd]
    }
}

export function removeProductCar(product:IProduct, qtd:number): IActionStore {
    return {
        type: 'REMOVE_PRODUCT_CAR',
        payload: [product, qtd]
    }
}
