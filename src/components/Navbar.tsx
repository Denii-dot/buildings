import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom';
import { styled } from 'styled-components'


const Container = styled.div`
  height: 80px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    width: 65%;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline  crimson;
`

const Menu = styled.ul`
    display: flex;
    list-style:none;
`

const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    cursor:pointer;
`

const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`

const LinkWithoutUnderline = styled(NavLink)`
  text-decoration: none;
  &.active{
    text-decoration: underline;
    color: darkblue;
  }
`;


const Navbar: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Denii</Logo>
                    <Menu>
                        <LinkWithoutUnderline to="/" >
                            <MenuItem>Residential blocks</MenuItem>
                        </LinkWithoutUnderline>
                        <LinkWithoutUnderline to="houses">
                            <MenuItem>House</MenuItem>
                        </LinkWithoutUnderline>
                        <LinkWithoutUnderline to="factories">
                            <MenuItem>Factores</MenuItem>
                        </LinkWithoutUnderline>
                        <LinkWithoutUnderline to="/commercial_premises">
                            <MenuItem>Commercial premises</MenuItem>
                        </LinkWithoutUnderline>
                    </Menu>
                </Left>
                <Button>Zaloguj</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar