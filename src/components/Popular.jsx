import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';



function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
getPopular();
    },[]);

const getPopular = async () => {

const check = localStorage.getItem('popular');
if (check) {
setPopular(JSON.parse(check));
}
else{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await api.json();

localStorage.setItem('popular', JSON.stringify(data.recipes));

   setPopular(data.recipes);
   console.log(data.recipes);

}



    
};


  return (<div>
             <Wrapper>
             <h3>Popular Picks</h3>
             <Splide options={{
                 perPage: 4, 
                 gap: '5rem',
                 drag: 'free',
             }}>
            {popular.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                <Card>
<p>{recipe.title}</p>
<img src={recipe.image} alt={recipe.title} />
  <Gradient/>
                </Card>
                </SplideSlide>
                );
            })}
            </Splide>
             </Wrapper>
       
  </div>)
}


const Wrapper = styled.div`
margin: 4rem 0rem;
`

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
position: relative;

img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
object-fit: cover;
}

p{
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    color: white;
    font-weight: 600;
    font-size: 20px;
    width: 95%;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;
}

`
const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Popular