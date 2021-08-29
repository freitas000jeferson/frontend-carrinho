import styled from "styled-components";

export const MainFormCarProduct: any = styled.div`
    display:flex;
    flex-direction:column;
    align-items: stretch;
    padding: 10px 10%;
    h1{ 
        font-size:25px;
        margin:10px 0;
    }
    .container-car{
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.55);
        display: flex;
        flex-direction:column;
        align-items: stretch;
        background-color: #fff;
        margin: 10px 0;
        header{
            padding: 20px;
            background-color:#475D6D;
            display: flex;
            flex-direction: row;
            justify-content:space-between;
            gap: 15px;
            color:#fff;
        }
        h2{
            font-size:20px;
        }
        .price{
            flex-grow: 1;
        }
        p{
            font-size:14px;
        }
        .btn-purchase{
            border: none;
            color: #fff;
            background-color: #00E068;
            padding: 8px 25px;
            border-radius: 2px;
            transition: 600ms;
        }
        .btn-purchase:hover,
        .btn-purchase:focus {
            box-shadow: inset 0 -3.25em 0 #fff;
            color: #00E068;
        }
        .btn-delete{
            border: none;
            color: #fff;
            background-color: #FF0059;
            padding: 5px 25px;
            border-radius: 4px;
            transition: 600ms;
        }
        
    }
    
`;


export const BodyCarProduct: any = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 15px;
    .product-card{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        flex-wrap: wrap;
        gap: 10px;
        padding-bottom: 10px;
        border-bottom: 2px solid #5e5e5e;
        p{
            color:#5e5e5e;
        }
        .card-part01{
            img{
                /* background-color: #ff0; */
                width: 300px;
                height: 300px;
                object-fit: contain;
            }
        }
        .card-part02{
            width: 300px;
            
        }
        .card-part03{
            width: 300px;
            display: flex;
            flex-direction:column;
            gap: 10px;
            h3{
                font-weight: 500;
            }
            span{
                font-size:20px;
                font-weight: 700;
            }
            .qtd-product{
                display: flex;
                flex-direction: row;
                gap: 25px;
                button{
                    width: 30px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: none;
                    background-color: #00E068;
                    color: #fff;
                    font-size: 22px;
                    font-weight: 500;
                }
            }
        }
    }

    @media only screen and (max-width: 625px) {
        .card-part01{
            img{
                max-width: 300px;
                max-height: 300px;
                object-fit: contain;
            }
        }
    }
`;