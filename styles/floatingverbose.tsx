import styled from 'styled-components'

export const FloatingVerboseElement = styled.div`
    width: fit-content;
    padding: 15px;
    position: fixed;
    bottom: 10px;
    right: 1rem;
    border-radius: 24px;
    z-index: 100;
    display: flex;
    z-index: 10;

    @media only screen and (max-width: 768px) {
        bottom: 65px;
        left: 50%;
        translate: -50%;
    }
`

export const SwitchContainer = styled.label`
    position: relative;
    display: inline-block;
    width: 120px;
    height: 34px;
`

export const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    width: 120px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0,0,0,0.6)'
            : 'rgba(255,255,255,0.6)'};
    backdrop-filter: blur(50px);        
    transition: background-color 0.4s;
    border-radius: 34px;    

    &:before {
        position: absolute;
        content: 'Minimal';
        height: 26px;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 4px;
        bottom: 4px;
        background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(255,255,255,0.6)'
            : 'rgba(0,0,0,0.6)'};
        transition: transform 0.4s;
        border-radius: 34px;
    }

    ${Input}:checked + & {
        background-color: #ff0844;
    }

    ${Input}:checked + &:before {
        content: 'Verbose';
        transform: translateX(31px);
    }
`
