import IProduct from "../../interfaces/IProduct";

function ProductsReducer(state: IProduct[] = [], action: any) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return state

    default:
      return state
  }
}
export default ProductsReducer;