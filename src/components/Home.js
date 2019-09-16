import React from "react";
import data from "../data.json";
import {HomeIndexCard} from "./HomeIndexCard";
import styled from "styled-components";

const HomeStyle = styled.main`
    min-height:100vh;
    height:auto;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    background-color: LIGHTSALMON;
`

export function Home(){

    const topics = Object.keys(data).map((key,i)=>{
        return <HomeIndexCard key={i} name={key} banner={data[key].banner}></HomeIndexCard>
    })

    return (
        <HomeStyle>
            {topics}
        </HomeStyle>
    )
}
