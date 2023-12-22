import styled from 'styled-components'

const ArtWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('/images/artworks.png');
    background-position: center;
    background-size: cover;
`

const Overlay = styled.div`
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(255,255,255,0.3)'
            : 'rgba(0,0,0,0.8)'};
    height: 100%;
    backdrop-filter: blur(30px);
    display: grid;
    grid-template-columns: 50% 50%;

    @media only screen and (max-width: 768px) {
        display: block;
    }
`

const ArtMetaDataWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: bold;
    }

    p {
        margin: 15px 0;
        line-height: 1.3rem;
        font-size: 1.2rem;
    }

    img {
        margin-left: auto;
        filter: ${({ theme }) =>
            theme.bgColor === '#FFEBF7' ? 'invert(100%)' : 'invert(0%)'};
    }

    @media only screen and (max-width: 768px) {
        height: 40%;
        width: 75%;
        justify-content: flex-end;
    }
`

const ArtCard = styled.div.attrs({
    className: 'art-cards',
})`
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;

    @media only screen and (max-width: 768px) {
        height: 60%;
    }
`

const SwiperArea = styled.div.attrs({
    className: 'swipey-cards',
})`
    width: 100%;
    flex-grow: 1;
    padding-top: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    @media only screen and (max-width: 768px) {
        padding-top: 0;
    }
`

const SwiperCard = styled.div.attrs({
    className: 'swipey-card',
})`
    display: inline-block;
    min-width: 500px;
    min-height: 500px;
    max-width: 100%;
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(255,255,255,1)'
            : 'rgba(0,0,0,0.8)'};
    border-radius: 8px;
    overflow: hidden;
    position: absolute;
    will-change: transform;
    transition: all 0.3s ease-in-out;
    cursor: -webkit-grab;
    cursor: -moz-grab;
    cursor: grab;
    backdrop-filter: blur(3px);

    img {
        max-width: 550px;
        pointer-events: none;

        @media only screen and (max-width: 768px) {
            max-width: 350px;
        }
    }

    @media only screen and (max-width: 768px) {
        min-width: auto;
        min-height: auto;
    }
`

const ByLine = styled.p`
    background: white;
    color: black;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
`

const RefreshCard = styled.div`
    height: 300px;
    width: 65%;
    background: ${({ theme }) => theme.bgColor};
    border-radius: 1rem;
    div {
        width: 80%;
        @media only screen and (max-width: 768px) {
            width: 85%;
        }
    }

    .go-see-again {
        pointer-events: none;
    }

    @media only screen and (max-width: 768px) {
        width: 70%;
    }
`

const RefreshButton = styled.div`
    margin-top: 1rem;
    cursor: pointer;
    border-bottom: 1px solid #ff0844;
    width: 38% !important;
    padding-bottom: 5px;
    pointer-events: auto;

    p {
        font-size: 0.9rem;
        font-weight: light;
        letter-spacing: 5px;
        text-transform: uppercase;
        text-decoration: underline;
        background-image: linear-gradient(220deg, #ff0844 0%, #ffb199 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media only screen and (max-width: 768px) {
        margin-top: 1.5rem;
        padding: 7px;
        border: 1px solid #ff0844;
    }
`

export {
    ArtWrapper,
    Overlay,
    ArtMetaDataWrapper,
    ArtCard,
    SwiperArea,
    SwiperCard,
    RefreshCard,
    RefreshButton,
    ByLine,
}
