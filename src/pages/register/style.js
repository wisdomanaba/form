import styled from 'styled-components';

export const BodyDiv = styled.div`
    
    width: 100%;
    
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

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 70%;
    margin: auto auto 4em auto;
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
    color: white;
    .info-main{
        margin: auto;
    }
`;

export const FormBody = styled.div`
    background: white;
    flex-grow: 2;
    padding: 2em;

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
        margin-top: 1.7em;
        margin-bottom: 0.5em;
        /* width: 50%; */
        text-align: start;
        font-size: 15px;
    }

    div label::after{
        content: " *";
        color: red;
    }

    div button {
        background: #8bdae2;
        border: none;
        padding: 0.9em 2em; 
        color: white;
        margin: auto;
        margin-top: 1.7em;
        border-radius: 3px;
        font-size: 16px;
        cursor: pointer;
    }
`;
