import React from "react";
import styled from "styled-components";

const IndexCardDivStyle = styled.div`
    height: 25%;
    width:25%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    & img{
        width:100%;
        height:40%;
        object-fit:contain;        
    } 
    & h1{   
        font-size: 30px;
        opacity:0;
        background-color: CORAL;
    }
`;

export default function ContentIndexCard (props){
    return(
        <IndexCardDivStyle {...props} onClick={()=>{}}>
            <img src={`../media/${props.word}.png`} alt="word section"/>
            <h1>{props.word}</h1>
            
        </IndexCardDivStyle>
    )
}