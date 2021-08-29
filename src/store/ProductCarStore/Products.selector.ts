import ICarStore from "../../interfaces/ICar"

export const addProductById = (state:ICarStore, action: any):ICarStore => {
        const [product, qtd] = action.payload;
        const car=state;
        if(!state.products[product.id]){
            car.products[product.id]= product;
        }
        car.products[product.id].length+=qtd;
        console.log("aumentou", car.products[product.id].length)
        const auxTotal = product.price*qtd;
        car.length+=qtd;
        car.total+=auxTotal;

        return car;
    }
export const removeProductById = (state:ICarStore, action: any):ICarStore => {
        const [product, qtd] = action.payload;
        const car=state;
        // const prod:IProduct={description, id, length, name, price}
        if(!state.products[product.id]){
            console.log("nao existe esse produto no carrinho!")   
        }else if(state.products[product.id].length>qtd){
            const auxTotal = product.price*qtd;
            car.products[product.id].length-=qtd;
            car.length-=qtd;
            car.total-=auxTotal;
        }else{
            // se a quantidade q ele quer remover for maior eu so deixo 0
            const auxLen = car.products[product.id].length;
            car.products[product.id].length = 0;
            car.length -= auxLen;
            car.total -= auxLen*product.price;
            delete car.products[product.id]
        }
        return car;
    }


