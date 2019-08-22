import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
`
const TabList = styled.div`
    display: flex;
    justify-content: center;
    & > a {
        font-size:18px;
        font-family:PingFangSC;
        font-weight:400;
        color: #333;
        margin: 0 60px;
        padding: 24px 0;

        &.selected {
            color: ${(props) => props.theme.primaryColor};
            border-bottom: 2px solid ${(props) => props.theme.primaryColor};
        }

        &:hover {
            color: ${(props) => props.theme.primaryColor};
            text-decoration: none;
        }
    }
`

export default function Tab() {
    const { t, i18n } = useTranslation();

    return (
        <Wrapper>
            <TabList>
                <NavLink to="/online/" activeClassName="selected">{t('online-staking')}</NavLink>
                <NavLink to="/offline/" activeClassName="selected">离线质押</NavLink>
            </TabList>
        </Wrapper>
    )
}
