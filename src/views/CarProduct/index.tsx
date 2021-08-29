import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IProduct from '../../interfaces/IProduct';
import image from "../../assets/image.svg";
import { MainFormCarProduct, BodyCarProduct } from './styled';

const CarProductView: React.FC = () => {
    const [product, setProduct] = useState<IProduct[]>([]);
    const [totalPrice, setTotaPrice] = useState<number>(0);
    const [dateIni,] = useState<Date>(new Date());
    const [len, setLen] = useState<number>(0);

    useEffect(() => {
        init();
        // console.log(metaData);
    }, [])
    const init = () => {
        const metaData: IProduct[] = JSON.parse(localStorage.getItem('ProductsCar') || '[]');
        setProduct(metaData);

        let sum: number = 0;
        metaData.forEach((p) => {
            sum = (sum) + (p.price * p.length);
            console.log(sum);
        });
        setTotaPrice(sum);
    }

    const removeCar = (index: number) => {
        let data: IProduct[] = product;
        data.splice(index, 1);
        localStorage.setItem(`ProductsCar`, JSON.stringify(data));
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
                        <h2>R$ {totalPrice.toFixed(2)}</h2>
                    </div>
                    <div className="purchase">
                        <button onClick={(e: any) => { e.preventDefault(); }}
                            className="btn-purchase"> COMPRAR</button>
                    </div>
                </header>
                <BodyCarProduct>
                    {product.map((p, index) =>
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
                                        onClick={(e: any) => { e.preventDefault(); if (len > 0) setLen(len - 1) }}
                                    > - </button>
                                    <span>{len}</span>
                                    <button className="btn-update-qtd"
                                        onClick={(e: any) => { e.preventDefault(); setLen(len + 1) }}
                                    > + </button>
                                </div>
                                <h3>Valor:</h3>
                                <span>R$ {p.price.toFixed(2)}</span>
                                <h3>Total:</h3>
                                <span>R$ {(p.price * p.length).toFixed(2)}</span>
                                <button onClick={(e: any) => { removeCar(index); }}
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