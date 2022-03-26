import styled from "styled-components"
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Search() {

const [input, setInput] = useState('');
const navigate = useNavigate();

const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
};

  return (
    <FormStyle onSubmit={submitHandler}>
    <div>
    <FaSearch></FaSearch>
    <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/>
    </div>
    <h1>{input}</h1>
    </FormStyle>
  )
}

const FormStyle = styled.div`
margin: 0 20rem;

div{
    width: 100%;
    position: relative;
}
input{
    border: none;
   background: linear-gradient(35deg, #494949, #313131);
   border-radius: 1rem;
   outline: none;
   font-size: 1.5rem;
   padding: 1rem 3rem;
   color: white;
   width: 100%;
}
svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
}

`;

export default Search