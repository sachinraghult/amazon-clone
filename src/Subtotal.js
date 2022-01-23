import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <SubtotalContainer>
        <CurrencyFormat
        renderText={(value) => (
            <>
                <p>
                    Subtotal (0 items): <strong>{value}</strong>
                </p>
                <SubtotalGift>
                    <input type="checkbox" /> This order contains a gift
                </SubtotalGift>
            </>
        )}

        value={1900.99}
        decimalScale={2}
        thousandSeparator={true}
        prefix={"$"}
        displayType={"text"}
        />

        <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </SubtotalContainer>
 );
}

export default Subtotal;

const SubtotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #dddddd;
    border-radius: 3px;
`

const SubtotalGift = styled.small`
    display: flex;
    align-items: center;

    input {
        margin-right: 5px;
    }
`

const CheckoutButton = styled.button`
    width: 100%;
    height: 30px;
    background: #f0c14b;
    border-radius: 2px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
`