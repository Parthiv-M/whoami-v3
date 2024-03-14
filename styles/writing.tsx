import styled from 'styled-components'

const WritingWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 768px) {
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

const WIPBanner = styled.div`
    margin-bottom: 2rem;
    font-size: 5rem;
    font-weight: 800;
    opacity: 0.2;
    line-height: 5.2rem;
`

export { WritingWrapper, WIPBanner }
