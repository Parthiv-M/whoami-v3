import styled from 'styled-components'

const HeroSection = styled.div`
    width: 75vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1024px) {
        width: 90vw;
        height: 50vh;
    }

    @media only screen and (max-width: 768px) {
        width: 100vw;
        height: fit-content;
        padding: 1rem;
    }
`

const ContentTainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2rem;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
`

const GitHubImage = styled.img.attrs({
    src: '/images/githubbgbw.png',
    draggable: 'false',
})`
    height: 100%;
    width: 100%;
`

const GitHubHeader = styled.h1`
    font-size: 5rem;
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
        padding-left: 10px;
        font-size: 3rem;
    }

    @media only screen and (max-width: 1024px) {
        font-size: 4rem;
    }
`

const GitHubSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 80%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

const GitHubSubText = styled.h4`
    font-size: 2rem;
    width: fit-content;
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
        padding-left: 10px;
        font-size: 1rem;
    }
    
    @media only screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }
`

const ProjectLinkArea = styled.div`{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    grid-column-gap: 5px;
    grid-row-gap: 17px;
    a {
        text-decoration: underline!important;
        border: 1px solid ${({ theme }) =>
            theme.bgColor === '#FFEBF7' ? '#b4b9be' : '#434854'};
        padding: 5px 10px;
    }
    a:hover {
        color: inherit;
        border: 1px solid ${({ theme }) =>
            theme.bgColor === '#FFEBF7' ? 'black' : 'lightgrey'};
    }
    @media only screen and (max-width: 768px) {
        padding-left: 10px;
    }
}
`

const ProjectLinkDescription = styled.div`{
    display: none;
    position: absolute;
    z-index: 10;
    top: 27px;
    height: fit-content;
    width: 400px;
    padding: 1rem;
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0, 0, 0, 0.1)'
            : 'rgba(255, 255, 255, 0.1)'};
    border-radius: 2px;
    backdrop-filter: blur(20px);
}`

const ProjectDescriptionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
`

export {
    HeroSection,
    ContentTainer,
    GitHubHeader,
    GitHubSubDiv,
    GitHubSubText,
    GitHubImage,
    ProjectLinkArea,
    ProjectLinkDescription,
    ProjectDescriptionHeader,
}
