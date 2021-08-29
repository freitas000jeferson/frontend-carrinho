import IActionStore from "../../interfaces/IActionStore";
import IProduct from "../../interfaces/IProduct";

export function addAllProducts(params: IProduct[]): IActionStore {
  return {
    type: 'ADD_ALL_PRODUCTS',
    payload: params
  }
}