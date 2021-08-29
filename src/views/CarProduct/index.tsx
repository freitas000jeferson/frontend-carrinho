import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IProduct from '../../interfaces/IProduct';
import image from "../../assets/image.svg";
import { MainFormCarProduct, BodyCarProduct } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import ICarStore from '../../interfaces/ICar';
import { addProductCar, removeProductCar } from '../../store/ProductCarStore/ProductCarStore.actions';

const CarProductView: React.FC = () => {
    const dispatch = useDispatch();
    const car:ICarStore =  useSelector((state:any)=> state.productCarStore);
    const [product, setProduct] = useState<IProduct[]>([]);
    const [dateIni,] = useState<Date>(new Date());

    useEffect(() => {
        init();
        // console.log(metaData);
    },)

    const init = () => {
        setProduct( Object.values(car.products))
    }

    const removeCar = (p: IProduct) => {
        dispatch(removeProductCar(p, p.length));
        init();
    };

    return <div>
        <Header />
        <MainFormCarProduct>
            <h1>Meu Carrinho</h1>
            <div className="container-car">
                <header>
                    <div className="date">
                        <p>Data do pedido:</p>
                        <h2>
                            {dateIni.getDate() + "/" + (dateIni.getMonth() + 1) + "/" + dateIni.getFullYear()}
                        </h2>
                    </div>
                    <div className="price">
                        <p>Total:</p>
                        <h2>R$ {car.total.toFixed(2)}</h2>
                    </div>
                    <div className="purchase">
                        <button onClick={(e: any) => { e.preventDefault(); }}
                            className="btn-purchase"> COMPRAR</button>
                    </div>
                </header>
                <BodyCarProduct>
                    {product.map((p:IProduct, index:number) =>
                        <div key={index} className="product-card">
                            <div className="card-part01">
                                <img src={image} alt="imagem ilustrativa" />
                            </div>
                            <div className="card-part02">
                                <h1>{p.name}</h1>
                                <p>{p.description}</p>
                            </div>
                            <div className="card-part03">
                                <h3>Quantidade de itens:</h3>

                                <div className="qtd-product">
                                    <button className="btn-update-qtd"
                                        onClick={(e: any) => { e.preventDefault();  
                                            dispatch(removeProductCar(p,1));init(); }}
                                    > - </button>
                                    <span>{p.length}</span>
                                    <button className="btn-update-qtd"
                                        onClick={(e: any) => { e.preventDefault();
                                            dispatch(addProductCar(p, 1));init(); }}
                                    > + </button>
                                </div>
                                <h3>Valor:</h3>
                                <span>R$ {p.price.toFixed(2)}</span>
                                <h3>Total:</h3>
                                <span>R$ {(p.price * p.length).toFixed(2)}</span>
                                <button onClick={(e: any) => { removeCar(p);}}
                                    className="btn-delete"> REMOVER</button>
                            </div>
                        </div>
                    )}
                </BodyCarProduct>
            </div>

        </MainFormCarProduct>
        <Footer />

    </div>;
}

export default CarProductView;