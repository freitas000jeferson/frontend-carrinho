import React, {useEffect} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListProducts from '../../components/ListProducts';
import ProductService from '../../services/Products.service';
import { BodyHomeView } from './styled'
import { useDispatch } from 'react-redux'
import IProduct from '../../interfaces/IProduct';
import { addAllProducts } from '../../store/Products/Products.actions';


const HomeView: React.FC = () => {
    const productService:ProductService = new ProductService();
    const dispatch = useDispatch();
    useEffect(()=>{
        init();
    },);
    async function init(){
        const response = await productService.findAll();
        if(response!=null) {
            const data:IProduct[] = response.map(function (e:any):IProduct{ 
                return {
                    id: parseInt(e.id),
                    name: e.name,
                    description: e.description,
                    price: parseFloat(e.price.replaceAll(',','.')),
                    length: 0,
                 }
            });
            dispatch(addAllProducts([...data]));
            // console.log(data);
        }
    }
    return (
        <BodyHomeView>
            <Header></Header>
            <ListProducts></ListProducts>
            <Footer></Footer>
        </BodyHomeView>

    );
}
export default HomeView;