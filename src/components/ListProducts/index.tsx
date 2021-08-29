import React, { } from 'react';
import { MainContainer } from './styled'
import Card from '../Card';
import IProduct from '../../interfaces/IProduct';

const ListProducts: React.FC = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);
  const products: IProduct[] = [
    {
      id: 1,
      name: "x-box",
      price: 2550,
      description: "x boxe | 1TB SSD",
      length: 0,
    },
    {
      id: 2,
      name: "play station",
      price: 1200,
      description: "play station | 3TB HDD",
      length: 0,
    },
    {
      id: 25,
      name: "smart tv xd 46",
      price: 4200,
      description: "smart tv xd |46",
      length: 0,
    },
    {
      id: 26,
      name: "smart tv xd 50",
      price: 6000,
      description: "smart tv xd |50",
      length: 0,
    },
    {
      id: 30,
      name: "soundbar",
      price: 599,
      description: "soundar 60W | bluetooth",
      length: 0,
    }
  ]

  // useEffect(() => {
  //   api.get('products/')
  //     .then((response:any) => {
  //       setProducts(response.data);
  //       // console.table(products);
  //     })
  //     .catch((error:any) => {})
  // },[]);

  return <MainContainer>
    <div className="list-products">
      {
        products.length > 0 ?
          products.map((p, index) =>
            <Card key={index} {...p} />
          ) : ''
      }
    </div>

  </MainContainer>;
}

export default ListProducts;