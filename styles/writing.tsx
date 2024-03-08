import styled from 'styled-components'

const WritingWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 768px) {
        width: 90%;
        line-height: 1.2rem;
        padding: 0 2rem;
    }

    a {
        text-decoration: underline;
        color: #ff0844;
        &:hover {
            text-decoration: none;
        }
    }
`

export { WritingWrapper }
