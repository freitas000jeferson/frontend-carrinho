import React from 'react';
import { ButtonCarComponent } from './styled';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import ICarStore from '../../interfaces/ICar';

const ButtonCarStore: React.FC = () => {
    let history = useHistory();
    const car:ICarStore =  useSelector((state:any)=> state.productCarStore);

    return <>
        <ButtonCarComponent onClick={(e: any) => { e.preventDefault(); history.push(`/my-car`); }}
            className="btn-car">
            <i className="fa fa-shopping-cart"></i>
            <span>carrinho</span>
            {car.length>0?
                <div id="icon-length">{car.length}</div>
            :""}
        </ButtonCarComponent></>
}
export default ButtonCarStore;