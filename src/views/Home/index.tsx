
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListProducts from '../../components/ListProducts';
import { BodyHomeView } from './styled'
const HomeView: React.FC = () => {
    return (
        <BodyHomeView>
            <Header></Header>
            <ListProducts></ListProducts>
            <Footer></Footer>
        </BodyHomeView>

    );
}
export default HomeView;