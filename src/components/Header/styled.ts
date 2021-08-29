import styled from 'styled-components'
export const HeaderComponent: any = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction:row;
    justify-content:start;
    gap: 10%;
    height:60px;
    padding: 0 10%;
    align-items: center;
    color: #5E5E5E;
    button.title{ 
        color:#4d4d4d;
        font-size:20px;
        border: none;
        background-color: #fff;
    }
    @media only screen and (max-width: 625px){
        gap: 10px; 
    }
`
export const SearchHeaderApp: any = styled.div`
    display: flex;
    flex-direction:row;
    padding: 0;
    margin:0;
    margin-left: 10px;
    justify-content:start;
    height:30px; 
    flex-grow: 3;
    box-shadow: 1px 1px 4px #5e5e5e;
    border-radius: 3px;
    overflow: hidden;
    input{ 
        border: none;
        outline: none;
        flex-grow: 1;
        padding: 10px;
    }
    input:focus, textarea:focus, select:focus{
        outline: none;
    }
    button{ 
        margin: 0;
        padding-left: 12px;
        padding-right: 13px;
        border: none;
        color:#fff;
        background-color: #4895ef;
        text-align:center;
        i{ 
            color:#fff;
            padding: 0;
            margin:0;}
    }

    
`