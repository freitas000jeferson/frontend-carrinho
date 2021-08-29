import IProduct from "../../interfaces/IProduct";

function ProductsReducer(state: IProduct[] = [], action: any) {
  // console.log(action);
  switch (action.type) {
    case 'ADD_ALL_PRODUCTS':
      return action.payload

    default:
      return state
  }
}
export default ProductsReducer;