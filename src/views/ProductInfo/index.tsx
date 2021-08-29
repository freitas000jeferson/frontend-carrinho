import './index.css';

import React, {
  useState,
} from 'react';
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { ProductDescription } from './style';
import { useHistory } from 'react-router-dom';
import { ListRate } from '../../components/Card/styled';
import IProduct from '../../interfaces/IProduct';
import image from "../../assets/image.svg";

const ProductInfoView: React.FC = () => {
  const starsAux = [1, 2, 3, 4, 5];
  const rate = (Math.random() * 5)
  const [qtdProduct, setQtdProduct] = useState<number>(1);
  const [cep, setCep] = useState<string>('');
  const [dateIni,] = useState<Date>(new Date());
  const [dateEnd,] = useState<Date>(new Date());

  const history = useHistory();
  // const { id }: any = useParams();
  const [product,] = useState<IProduct>({
    id: 0,
    name: "",
    description: "",
    price: 200,
    length: 1

  });



  return <div>
    <Header />
    <section className="container">
      <ProductDescription>
        <div className="desc-card">
          <div className="card-part01">
            <img src={image} alt="imagem ilustrativa" />
          </div>
          <div className="card-part02">
            <h1>{product.name}</h1>
            <ListRate>
              {
                starsAux.map((star, index) => {
                  if (index < rate)
                    return <span className="fa fa-star star star-checked"></span>
                  return <span className="fa fa-star star"></span>
                })
              }
            </ListRate>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="desc-price">
          <h1 >
            Por: <span className="price-product">R$ {product.price.toFixed(2)}</span>
          </h1>
          <div className=" content ">
            <label className="title">
              Quantidade de itens:
            </label>
            <div className="qtd-product">
              <button className="btn-update-qtd"
                onClick={(e: any) => { e.preventDefault(); if (qtdProduct > 0) setQtdProduct(qtdProduct - 1) }}
              > - </button>
              <h3>{qtdProduct}</h3>
              <button className="btn-update-qtd"
                onClick={(e: any) => { e.preventDefault(); setQtdProduct(qtdProduct + 1) }}
              > + </button>

            </div>
          </div>
          <div className="content">
            <label className="title">
              Digite seu cep:
            </label>
            <input type="text" className="cep-input" placeholder="cep" value={cep}
              onChange={e => setCep(e.target.value)} />

            <div className="cep-product">
              <p>receba entre </p>
              <h4>{((dateIni.getDate())) + "/" + ((dateIni.getMonth() + 1)) + "/" + dateIni.getFullYear()}
                <span> a </span>
                {((dateEnd.getDate())) + "/" + ((dateEnd.getMonth() + 1)) + "/" + dateEnd.getFullYear()}
              </h4>
            </div>

          </div>
          <button onClick={(e: any) => { e.preventDefault(); }}
            className="add-product-car"> ADICIONAR AO CARRINHO</button>
          <button onClick={(e: any) => { e.preventDefault(); history.push(`/my-car`); }}
            className="buy-product"> COMPRAR</button>

        </div>
      </ProductDescription>

    </section>


    <Footer />
  </div>;
}

export default ProductInfoView;