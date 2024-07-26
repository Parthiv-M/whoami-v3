import styled, { keyframes } from 'styled-components'

const LandingWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // position: fixed;
    transition: all 1ms ease-in;
    z-index: 0;
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

    @media only screen and (max-width: 1024px) {
        width: 60%;
    }
`

const LandingName = styled.h1`
    font-size: 5rem;
    background-image: linear-gradient(220deg, #ff0844 0%, #ffb199 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (max-width: 768px) {
        font-size: 3.5rem;
        margin: 1rem 0;
    }

    @media only screen and (max-width: 1024px) {
        font-size: 3rem;
    }
`

const LandingDescription = styled.p`
    width: 60%;

    @media only screen and (max-width: 1024px) {
        width: 80%;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        font-size: 0.85rem;
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
    z-index: 100;

    @media only screen and (max-width: 767px) {
        margin-top: 20px;
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

const SubSectionHeader = styled.div`
    width: 75%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 10px;

    h2 {
        font-size: 3rem;
        display: inline;
        font-weight: bold;
    }

    &:hover h2 span {
        background-image: linear-gradient(220deg, #ff0844 0%, #ffb199 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0 24px;

        h2 {
            transition: all 100ms ease-in;
            font-weight: light;
            font-size: 1.5rem;
            letter-spacing: 1px;
        }
    }
`

export {
    LandingWrapper,
    LandingPhoto,
    LandingName,
    LandingDescription,
    LandingIconTray,
    LandingTheProton,
    SubSectionHeader,
}
