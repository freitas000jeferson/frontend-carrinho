import HttpService from "./HttpService";

export default class ProductService extends HttpService {
    constructor() {
        super("products");
    }
}