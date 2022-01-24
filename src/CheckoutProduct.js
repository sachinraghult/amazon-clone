import React from 'react';
import styled from 'styled-components';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, price, rating, image}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
            <ProductContainer>
                <ProductImage src={image} alt='' />
                <ProductInfo>
                    <ProductTitle>{title}</ProductTitle>
                    <ProductPrice>
                        <small>$</small>
                        <strong>{price}</strong>
                    </ProductPrice>
                    <ProductRating>
                        {
                            Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))
                        }
                    </ProductRating>
                    <BasketButton onClick={removeFromBasket}>Remove from Basket</BasketButton>
                </ProductInfo>
            </ProductContainer>
    );
}

export default CheckoutProduct;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;

    transition: transform 250ms ease-out;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.35);
    }
`

const ProductInfo = styled.div`
    padding-left: 20px;
`

const ProductTitle = styled.div`
    font-size: 17px;
    font-weight: 800;
`

const ProductPrice = styled.div`

`

const ProductRating = styled.div`
    display: flex;
`

const ProductImage = styled.img`
    max-height: 180px;
    width: 180px;
    object-fit: contain;
`

const BasketButton = styled.button`
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    height: 20px;
    cursor: pointer;
`