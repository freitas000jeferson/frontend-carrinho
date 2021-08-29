import styled from 'styled-components'
export const ButtonCarComponent: any = styled.button`
    margin:0 15px;
    display:flex;
    flex-direction:column;
    align-items: stretch;
    justify-content:center;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    color:#4d4d4d;
    box-shadow: none;
    position: relative;
    i{ 
        color:#4d4d4d;
        font-size:25px;
    }
    span{ 
        color:#4d4d4d;
        font-size:12px;
    }
    div#icon-length{
        width: 15px;
        height: 15px;
        text-align: center;
        background-color: red;
        color: white;
        font-size: 10px;
        position: absolute;
        border-radius: 50%;
        top: 32px;
        left: 40px;
    }
`