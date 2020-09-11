import styled from "styled-components"

export const Wrapper = styled.div`
    width: 80%;
    // height: 300px;
    border-radius: 10px;
    background: #fff;
    margin: 10px auto;
    padding: 10px;
    box-shadow: 5px 10px 10px #888888;
    
    p{
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
    }
`
type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    :hover{
        opasity: 0.8;
    }
    button{
        cursor: pointer;
        user-select: none;
        font-size: 20px;
        width: 100%;
        // height: 40px;
        padding: 10px;
        margin: 5px 0;
        background: ${({correct, userClicked}) => 
        correct
        ? "linear-gradient(to right, #29b954, #8efa6d);"
        : !correct && userClicked
        ? "linear-gradient(to right, #b92929, #fa6d6d);"
        : "linear-gradient(to right, #2980b9, #6dd5fa);"
    }
        color: white;
        font-size: 20px;
        font-weight: bold;
        outline: none;
        border: none;
        border-radius: 4px;
    }
    button:hover{
        background: ${({correct, userClicked}) => 
        correct
        ? "linear-gradient(to left, #29b954, #8efa6d);"
        : !correct && userClicked
        ? "linear-gradient(to left, #b92929, #fa6d6d);"
        : "linear-gradient(to left, #2980b9, #6dd5fa);"
    }
    }
`   