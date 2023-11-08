import styled from 'styled-components'

const ResumeSection = styled.div`
    margin-top: 2rem;
    height: 25vh;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    gap: 10px;

    h5 {
        font-size: 3rem;
        font-weight: bold;
    }

    h6 {
        font-size: 2rem;
        margin-bottom: 20px;
        span {
            background-image: linear-gradient(
                220deg,
                #ff0844 0%,
                #ff0844 50%,
                #ffb199 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    @media only screen and (max-width: 768px) {
        min-height: 50vh;
        max-height: fit-content;
        padding: 1rem 2rem;

        h5 {
            font-size: 2rem;
        }

        h6 {
            font-size: 1rem;
            margin-top: 20px;
            margin-bottom: 30px;
        }
    }
`

const ResumeButton = styled.a.attrs({
    href: '',
})`
    padding: 10px;
    margin-top: 10px;
    border: 1px solid grey;
    border-radius: 2px;

    &:hover {
        color: #ff0844;
        border: 1px solid #ff0844;
    }
`

export { ResumeSection, ResumeButton }
