import styled from 'styled-components';
import media from 'components/common/base/media';

const _ButtonBase = styled.button`
    padding: 18px 92px;
    font-size: 14px;
    border: 1px solid ${(props) => props.theme.primaryColor};
    width: ${ props => props.block ? "100%" : "auto"};

    svg {
        margin-bottom: 2px;
        margin-right: 4px;
    }

    &:hover {
        color: #fff;
        background-color: ${(props) => props.theme.primaryHoverColor};
        transition: .2s ease-in-out;
    }

    &:disabled {
        background-color: #CED0D9;
        border-color: #CED0D9;
    }

    ${media.tablet`
        padding: 18px;
    `}
`

const ButtonOutline = styled(_ButtonBase)`
    padding: 18px 92px;
    font-size:14px;
    color: ${(props) => props.theme.primaryColor};
    background-color: #fff;

    ${media.tablet`
        padding: 18px;
    `}
`

const Button = styled(_ButtonBase)`
    color: #fff;
    background-color: ${(props) => props.theme.primaryColor};
`

export {
    Button,
    ButtonOutline,
};