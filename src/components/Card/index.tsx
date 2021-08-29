import React, { useState, useEffect } from 'react';
// import routes from '../../config/routes';
import { useHistory } from "react-router-dom";
import IProduct from '../../interfaces/IProduct';
import image from "../../assets/image.svg";

import { CardContainer, Infos, ListRate } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { addProductCar } from '../../store/ProductCarStore/ProductCarStore.actions';
import ICarStore from '../../interfaces/ICar';

const Card = (props: IProduct) => {
    const dispatch = useDispatch();
    const car:ICarStore =  useSelector((state:any)=> state.productCarStore);

    let history = useHistory();

    const starsAux = [1, 2, 3, 4, 5];
    const [rate] = useState<number>(Math.random() * 5);
    const [data, setData] = useState<IProduct>({
        id: 1,
        name: "",
        description: "",
        price: 0,
        length: 0
    });
    useEffect(() => {
        setData({ ...props });
    }, [props]);

    return <CardContainer key={data.id.toString()}
        onClick={(e: any) => {
            e.preventDefault();
            // history.push(`/product/${data.id}`);
        }}>
        <Infos>
            <div className="image-product">
                <img src={image} width="260" alt="imagem ilustrativa" />
            </div>
            <h2>{data.name}</h2>
            <ListRate>
                {
                    starsAux.map((star, index) => {
                        if (index < rate)
                            return <span className="fa fa-star star star-checked"></span>
                        return <span className="fa fa-star star"></span>
                    })
                }
            </ListRate>
            <p>{(data.description)}</p>
            <h1>R$ {data.price.toFixed(2)}</h1>
            <p>em até 10x {(data.price / 10).toFixed(2)} s/juros</p>

            <button className="btn-add-car"
                onClick={(e: any) => {
                    e.preventDefault();
                    if (!car.products[data.id]) {
                        dispatch(addProductCar(data, 1));
                    }
                    console.log(car);
                    history.push(`/my-car`);
                    // TODO: add função pra ir para o carrinho
                }}>{
                    (!car.products[data.id]) ?
                        "ADICIONAR AO CARRINHO" :
                        "VER CARRINHO"
                }
            </button>

        </Infos>
    </CardContainer>;
}

export default Card;