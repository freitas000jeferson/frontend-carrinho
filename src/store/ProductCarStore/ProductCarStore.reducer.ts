import ICarStore from "../../interfaces/ICar";
import { addProductById, removeProductById } from "./Products.selector";

function ProductCarStoreReducer(state: ICarStore = {length: 0, products:[], total:0}, action: any) {
  switch (action.type) {
    case 'ADD_PRODUCT_CAR':
      return  addProductById(state, action)
    case 'REMOVE_PRODUCT_CAR':
        return removeProductById(state, action)
    default:
      return state
  }
}
export default ProductCarStoreReducer;