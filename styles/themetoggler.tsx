import styled from 'styled-components'

const ThemeToggle = styled.img`
    height: 20px;
    width: 20px;
    transition: all 500ms ease-in;

    &:hover {
        cursor: pointer;
        transform: rotate(-360deg);
    }
`

export { ThemeToggle }
