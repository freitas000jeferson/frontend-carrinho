import IRoute from "../interfaces/IRoute"
import CarProductView from "../views/CarProduct";
import HomeView from "../views/Home";
// import ProductInfoView from "../views/ProductInfo";
const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomeView,
        exact: true
    },
    {
        path: '/my-car',
        name: 'My Car',
        component: CarProductView,
        exact: false,
    },
    // todo: nao tem serviço de rota pra isso
    // {
    //     path: '/product/:id',
    //     name: 'Product Page',
    //     component: ProductInfoView,
    //     exact: false,
    // }

]

export default routes;