import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

import React from 'react'

function Category() {
  return (
    <List>

    <Slink to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
    </Slink>

     <Slink to={'/cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
    </Slink>

     <Slink to={'/cuisine/Thai'}>
        <GiNoodles/>
        <h4>Thai</h4>
    </Slink>

     <Slink to={'/cuisine/Chinese'}>
        <GiChopsticks/>
        <h4>Chinese</h4>
    </Slink>
    
    </List>
  )
}

const List = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;

${'' /* a{
  color: black;
  text-decoration: none;
  text-align: center;
  width: 70%;
  margin: 1rem auto;
} */}
`
// USING Slink for Navlink styling as Navlink gives active class to the object

const Slink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
transform: scale(0.8);
margin-right: 2rem;
text-decoration: none;

h4{
  color: white;
  font-size: 0.8rem;
}

svg{
  color: white;
  font-size: 1.5rem;
}

 &.active{
  background: linear-gradient(35deg, #f27121, #e94057);
}

`;

export default Category