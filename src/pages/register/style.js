import styled from 'styled-components';

export const BodyDiv = styled.div`
    
    width: 100%;
    height: 100vh;
    
    @media screen and (max-width: 500px) and (min-width: 280px){
        width: 100%;
        margin: auto;
    }
    
`;

export const RegDiv = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-content: center;

    @media screen and (max-width: 500px) and (min-width: 280px){
        font-size: 12px;
    }
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 70%;
    height: 80vh;
    margin: auto;
    border-radius: 2%;
    box-shadow: 0px 0px 30px #ccc;
    /* border: 1px solid red; */

    @media screen and (max-width: 500px) and (min-width: 280px){
        width: 100%;
        margin: auto;
        margin-top: 100px;
        flex-direction: column;
    }
`;

export const Info = styled.div`
    background: #8bdae2;
    flex-grow: 1;

    h3 {
        font-size: 30px;
        color: white;
    }
`;

export const FormBody = styled.div`
    background: white;
    flex-grow: 1;

    h3 {
        font-size: 30px;
        color: #8bdae2;
        margin-bottom: -5px;
        padding: 10px;
    }

    div {
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        text-align: start;
    }

    input {
        height: 30px;
    }

    div label {
        /* align-items: left; */
        /* margin-left: -300px; */
        /* border: 1px solid yellow; */
        margin-top: 1em;
        /* width: 50%; */
        text-align: start;
        font-size: 20px;
    }

    div button {
        background: #8bdae2;
        border: none;
        color: white;
        margin: auto;
        margin-top: 1em;
        width: 20%;
        height: 2.5em;
        border-radius: 3%;
        font-size: 20px;
        cursor: pointer;
    }
`;
