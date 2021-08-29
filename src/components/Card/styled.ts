import styled from 'styled-components'

export const CardContainer: any = styled.div`
    width: 300px;
    max-height: 425px;
    margin:0;
    padding:0;
    background-color: #fff;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.55);
    display: flex;
    flex-direction: column !important;
    justify-content:flex-start;
    align-items:stretch;
`
export const Infos: any = styled.div`
    /* min-height: 200px; */
    display: flex;
    flex-direction: column !important;
    justify-content: flex-start;
    align-items: stretch;
    padding:20px;
    margin: 0;
    gap: 5px;
    .image-product{ 
       max-height: 200px;
    }
    h2{ 
        text-align:left;
        font-size: 20px;
        text-overflow: ellipsis;
        font-weight: 600;
    }
    h1{
        text-align:left;
        font-weight: 700;
        font-size: 25px;
    }
    p{
        text-align:left;
        font-size: 14px;
    }
    button.btn-add-car{
        padding: 5px;
        border: none;
        color: #fff;
        background-color: #00E068;
        border-radius: 2px;
        transition: 600ms;
    }
    
`
export const ListRate: any = styled.div`
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content:start;
    gap: 8px;
    .star{
        font-size: 20px;
        color: #E2E2E2
    }
    .star-checked{
        color: #4895ef

    }
`