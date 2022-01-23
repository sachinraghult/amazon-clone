import React from 'react';
import styled from 'styled-components';
import Product from './Product';

function Home() {
  return (
    <HomeContainer>
        <HomeImage src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='Home Image' />

        <HomeRow>
            <Product 
                id="1111"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={19.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
            <Product 
                id="2222"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={25.16}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
        </HomeRow>
        <HomeRow>
            <Product 
                id="3333"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={30.85}
                rating={2}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
            <Product 
                id="4444"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={10.05}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
            <Product 
                id="5555"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={99.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
        </HomeRow>
        <HomeRow>
            <Product 
                id="6666"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={65.45}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
        </HomeRow>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
`

const HomeImage = styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const HomeRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
`