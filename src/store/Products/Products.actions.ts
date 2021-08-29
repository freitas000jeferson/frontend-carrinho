import IActionStore from "../../interfaces/IActionStore";

export function addProduct(id: number): IActionStore {
  return {
    type: 'ADD_PRODUCT',
    payload: id
  }
}