import styled from 'styled-components'

const IconContainer = styled.div`
    position: relative;

    svg {
        color: darkgrey;
    }

    svg:hover {
        transform: scale(1.1);
        color: #ff5680;
    }
`

const ToolTip = styled.span`
    display: block;
    position: absolute;
    z-index: 10;
    left: -50%;
    top: 0%;
    margin-top: 10px;
    padding: 0.55rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
    color: #000;
    border-radius: 50px;
    background-color: #fff;
    box-shadow:
        0 15px 35px rgba(50, 50, 93, 0.1),
        0 5px 15px rgba(0, 0, 0, 0.07);
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    opacity: 0;
    transition: all 0.2s ease-in-out;

    ${IconContainer}:hover & {
        top: -200%;
        opacity: 0.9;
    }
`

export { IconContainer, ToolTip }
