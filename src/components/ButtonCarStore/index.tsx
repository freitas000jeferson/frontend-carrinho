import React from 'react';
import { ButtonCarComponent } from './styled';
import { useHistory } from "react-router-dom";

const ButtonCarStore: React.FC = () => {
    let history = useHistory();

    return <>
        <ButtonCarComponent onClick={(e: any) => { e.preventDefault(); history.push(`/my-car`); }}
            className="btn-car">
            <i className="fa fa-shopping-cart"></i>
            <span>carrinho</span>
        </ButtonCarComponent></>
}
export default ButtonCarStore;