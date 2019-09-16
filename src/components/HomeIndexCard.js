import React from "react";
import styled from "styled-components";


const HomeIndexCardStyle = styled.div`
    height: 25%;
    width:23%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    background:TOMATO;
    margin-top:50px;
    cursor:pointer;
    &:hover{
        animation:shake 1s ease-in;
    }
    & img{
        width:100%;
        height:350px;
        object-fit:fill;        
    } 
    & h1{   
        font-size: 30px;
        text-align:center;
        font-family: 'Chewy', cursive;
    }
`

export function HomeIndexCard(props){
    return (
        <HomeIndexCardStyle>
            <img src={require(`../media/banners/${props.banner}`)} alt="banner"/>
            <h1>{props.name}</h1>
        </HomeIndexCardStyle>
    )
}
