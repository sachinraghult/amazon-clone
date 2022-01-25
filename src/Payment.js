import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'

function Payment() {

    const [{ basket, user }, ] = useStateValue();

    return (
        <Container>
            <PaymentContainer>
                <h1>
                    Checkout (<Link to='/checkout'>{basket.length} items</Link>)
                </h1>

                <PaymentSection>
                    <PaymentTitle>Delivery Address</PaymentTitle>
                    <PaymentAddress>
                        <p>{user?.email}</p>
                        <p>123 Jeff bezos Lane</p>
                        <p>Chennai - 602001</p>
                    </PaymentAddress>
                </PaymentSection>

                <PaymentSection>
                    <PaymentTitle>Review items and delivery</PaymentTitle>
                    <PaymentItems>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </PaymentItems>
                </PaymentSection>

                <PaymentSection>
                    <PaymentTitle>Payment Method</PaymentTitle>
                    <PaymentDetails>

                    </PaymentDetails>
                </PaymentSection>
            </PaymentContainer>
        </Container>
    );
}

export default Payment;

const Container = styled.div`
    background-color: white;
`

const PaymentContainer = styled.div`
    h1 {
        text-align: center;
        padding: 10px;
        font-weight: 400;
        background-color: rgb(234, 237, 237);
        border-bottom: 1px solid lightgray;

        a {
            text-decoration: none;
        }
    }
`

const PaymentSection = styled.div`
    display: flex;
    padding: 20px;
    margin: 0 20px;
    border-bottom: 1px solid lightgray;
`

const PaymentTitle = styled.div`
    flex: 0.2;
    font-size: 20px;
    font-weight: 600;
`

const PaymentAddress = styled.div`
    flex: 0.8;
`

const PaymentItems = styled.div`
    flex: 0.8;
`

const PaymentDetails = styled.div`
    flex: 0.8;
`