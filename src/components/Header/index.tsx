import React from 'react';
import ButtonCarStore from '../ButtonCarStore';
import { HeaderComponent, SearchHeaderApp } from './styled';
import { useHistory } from "react-router-dom";

const Header: React.FC = () => {
    let history = useHistory();

    return <HeaderComponent>
        <button className="title" onClick={(e: any) => { e.preventDefault(); history.push(`/`); }}
        >LOGO</button>
        <SearchHeaderApp>
            <input type="text" />
            <button onClick={(e: any) => { e.preventDefault() }}><i className="fa fa-search"></i></button>
        </SearchHeaderApp>
        <ButtonCarStore></ButtonCarStore>
        {/* <i className="material-icons">&#xe5d2;</i> */}
    </HeaderComponent>
}
export default Header;