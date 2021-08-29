import IProduct from "./IProduct";

export default interface ICarStore {
    products: IProduct[],
    lenght: number,
    total: number,
}