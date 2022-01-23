import React from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <HeaderContainer>
        <Logo src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />

        <Search>
            <SearchInput type='text' />
            <SearchButton />
        </Search>

        <HeaderNav>
            <Option>
                <OptionLine1>
                    Hello
                </OptionLine1>
                <OptionLine2>
                    Sign In
                </OptionLine2>
            </Option>

            <Option>
                <OptionLine1>
                    Returns
                </OptionLine1>
                <OptionLine2>
                    & Orders 
                </OptionLine2>
            </Option>

            <Option>
                <OptionLine1>
                    Your
                </OptionLine1>
                <OptionLine2>
                    Prime
                </OptionLine2>
            </Option>

            <OptionBasket>
                <BasketButton />
                <BasketCount>
                    0
                </BasketCount>
            </OptionBasket>
        </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 100;
`

const Logo = styled.img`
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
`

const Search = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
`

const SearchInput = styled.input`
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
`

const SearchButton = styled(SearchIcon)`
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042; 
`

const HeaderNav = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Option = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
`

const OptionLine1 = styled.div`
    font-size: 10px;
`

const OptionLine2 = styled.div`
    font-size: 13px;
    font-weight: 800;
`

const OptionBasket = styled.div`
    display: flex;
    align-items: center;
    color: white;
`

const BasketButton = styled(ShoppingBasketIcon)`

`

const BasketCount = styled(OptionLine2)`
    margin-left: 10px;
    margin-right: 10px;
`