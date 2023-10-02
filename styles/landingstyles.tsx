import styled, { keyframes } from 'styled-components'

const LandingWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LandingPhoto = styled.img.attrs({
    src: '/images/headshot.png',
    draggable: 'false',
})`
    border-radius: 0.6rem;
    width: 40%;
    filter: grayscale(100%);

    @media only screen and (max-width: 768px) {
        width: 80%;
    }
`

const LandingName = styled.h1`
    font-size: 5rem;
    background-image: linear-gradient(220deg, #ff0844 0%, #ffb199 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (max-width: 768px) {
        font-size: 4rem;
        margin: 1rem 0;
    }
`

const LandingDescription = styled.p`
    width: 60%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

const LandingTheProton = styled.a.attrs({
    href: 'https://github.com/parthiv-m',
    target: '_blank',
})`
    &:hover {
        color: #ff5680;
    }
`

const LandingIconTray = styled.div`
    margin-top: 15px;
    color: grey;
    display: flex;
    gap: 15px;

    @media only screen and (max-width: 768px) {
        justify-content: center;
    }

    a:nth-child(1):hover,
    a:nth-child(2):hover {
        color: #ffb199;
    }

    a:nth-child(3):hover,
    a:nth-child(4):hover {
        color: #ff5680;
    }

    a:nth-child(5):hover,
    a:nth-child(6):hover {
        color: #ff0844;
    }
`

const ScrollingWordsContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    gap: 5px;
`

const ScrollingWordsBox = styled.div`
    height: 3rem;
    border-radius: 10px;
    overflow: hidden;
`

const scrollUp = keyframes`
    15%, 25% {
      transform: translateY(-20%);
    }
    40%, 50% {
      transform: translateY(-40%);
    }
    65%, 75% {
      transform: translateY(-60%);
    }
    90%, 100% {
      transform: translateY(-80%);
    }
`

const ScrollingList = styled.ul`
    padding: 0;
    animation: ${scrollUp} 4s infinite;
`

const ScollingListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    list-style: none;
`

export {
    LandingWrapper,
    LandingPhoto,
    LandingName,
    LandingDescription,
    LandingIconTray,
    LandingTheProton,
}
