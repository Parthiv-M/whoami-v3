import styled from 'styled-components'

const HeroSection = styled.div`
    width: 75vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
        width: 100vw;
        height: fit-content;
        padding: 1rem;
    }
`

const ContentTainer = styled.div`
    height: 75vh;
    width: 100%;
    background-image: url('/images/githubbgbw.png');
    background-position: right center;
    background-size: contain;
    background-repeat: no-repeat;

    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 50vh;
        background-position: top center;
    }
`

const GridForText = styled.div`
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
        height: 85%;
        align-items: flex-end;
        margin: 10px;
    }
`

const GitHubHeader = styled.h1`
    font-size: 7rem;
    letter-spacing: 0.1rem;
    display: inline;
    background-image: linear-gradient(220deg, #ff0844 0%, #ffb199 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    text-shadow: 0px 0px 90px #1a1a1a;

    span {
        margin-left: 10px;
        transition: all 0.5s linear;
    }

    &:hover {
        span {
            margin-left: 20px;
        }
    }

    @media only screen and (max-width: 768px) {
        font-size: 3rem;
    }
`

const GitHubSubDiv = styled.div`
    text-align: left;
    width: 60%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

const GitHubSubText = styled.h4`
    font-size: 2rem;

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

export {
    HeroSection,
    ContentTainer,
    GridForText,
    GitHubHeader,
    GitHubSubDiv,
    GitHubSubText,
}
