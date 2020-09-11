import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
html, body{
    height: 100%;
    width: 100%;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
button{
    outline: none;  
}
.main{
    width: 100%;
    min-height: 100vh;
    text-align: center;
    background: #2980b9;
    background: -webkit-linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff); 
    background: linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff);
}
.heading{
    color: white;
    padding: 0.5em 0;
    font-weight: bolder;
    font-size: 50px;
    letter-spacing: 10px;
}
.start, .next, .submit{
    box-shadow: inset 0px 1px 0px 0px #00aa41;
    background: linear-gradient(to bottom, #00ff62 5%, #00aa41 100%);
    background-color: #00ff62;
    border-radius: 6px;
    border: 1px solid #00aa41;
    display: inline-block;
    width: 80%;
    cursor: pointer;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 50px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #00aa41;
}
.start:hover, .next:hover, .submit:hover {
    background: linear-gradient(to bottom, #00aa41 5%, #00ff62 100%);
    background-color: #ef027d;
}
.start:active, .next:active, .submit:active {
    position: relative;
    top: 1px;
}
.start{
    margin-top: 15rem;
}
.scorequestion{
    color: white;
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    font-weight: bold;
    font-size: 20px;
}
.userInfo{
    width: 80%;
    margin: 0 auto;
    color: white;
    text-align: left;
}
.userInfo label{
    font-weight: bold;
    font-size: 20px;
}
.userInfo input{
    font-size: 20px;
    padding: 10px;
    display: block;
    width: 100%;
    background: transparent;
    border: 1px solid white;
    border-radius: 4px;
    outline: none;
    transition: all 1s ease;
}
.userInfo input::placeholder{
    color: white
}
.userInfo input:focus::placeholder{
    color: black;
}
.userInfo input:focus{
    background: white;
}
@media (max-width: 400px){
    .heading{
        color: white;
        padding: 0.5em 0;
        font-weight: bolder;
        font-size: 50px;
        letter-spacing: 5px;
    }
}

`