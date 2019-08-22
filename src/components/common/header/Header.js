import React, { Component } from 'react'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import styled from 'styled-components';
import { IoIosGlobe } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
    & > nav {
        height: 80px;
        background-color: rgba(255,255,255,1);
        box-shadow: 0px -1px 0px 0px rgba(239,239,239,1);
    }
`

const Label = styled.label`
    height:20px;
    font-size:14px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:20px;
    & > svg {
        width: 14px;
        height: 14px;
    }
`

const ButtonText = styled.button`
    background: #fff !important;
    border: none;
    color:#333;
    font-size:14px;

    svg {
        margin-bottom: 2px;
        margin-right: 4px;
    }

    &:focus {
        box-shadow: none;
        outline: 0;
    }
`


function Header() {

    const { t, i18n } = useTranslation();

    return (
        <Wrapper>
            <Navbar light expand="md">
                <Container>
                    <NavbarBrand href="/">NAX Staking</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <ButtonText onClick={() => i18n.changeLanguage('zh-CN')}> <IoIosGlobe />中文</ButtonText>
                            <ButtonText onClick={() => i18n.changeLanguage('en')}> <IoIosGlobe />EN</ButtonText>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </Wrapper>
    );

}

export default Header;
