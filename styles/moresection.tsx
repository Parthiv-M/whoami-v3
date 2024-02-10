import styled from 'styled-components'

const MoreSection = styled.div`
    margin: 0 auto;
    width: 75%;

    h2 {
        display: inline;
        font-size: 3rem;
        font-weight: bold;

        @media only screen and (max-width: 768px) {
            font-size: 2rem;
            font-weight: bold;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 90%;
    }
`

const MoreCards = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
    position: relative;
    z-index: 10;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 100%;
    }
`

const MoreCard = styled.div`
    padding: 1.5rem;
    border: 3px solid transparent;
    border-radius: 10px;
    background: rgba(255, 8, 68, 0.1);

    &:hover {
        border: 3px solid #ff0844;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        border: 3px solid #ff0844;
    }
`

const MoreCardHeader = styled.h3`
    font-size: 2rem;
    margin-top: 1rem;
    transition: all 500ms ease-in;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${MoreCard}:hover & {
        color: #ff0844;
        letter-spacing: 2px;
    }

    @media only screen and (max-width: 768px) {
        color: #ff0844;
        letter-spacing: 2px;
    }
`

const MoreCardArrow = styled.img.attrs(({ theme }) => ({
    src:
        theme.bgColor === '#1A1A1A'
            ? '/icons/arrow-right-light.svg'
            : '/icons/arrow-right-dark.svg',
}))`
    height: 20px;
    opacity: 0.3;
    transition: all 500ms ease-in;

    ${MoreCard}:hover & {
        opacity: 1;
    }

    @media only screen and (max-width: 768px) {
        opacity: 1;
    }
`

export { MoreSection, MoreCards, MoreCard, MoreCardHeader, MoreCardArrow }
