import styled from 'styled-components'

const BlipsPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BlipArea = styled.div`
    padding: 1rem;
    width: 500px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BlipCardWrapper = styled.div`
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7' ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.2)'};
    min-height: 80%;
    width: 95%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;
    border: 1px solid transparent;
    transition: all 0.3s ease-in;

    &:hover {
        border: 1px solid
            ${({ theme }) =>
                theme.bgColor === '#FFEBF7'
                    ? 'rgba(0,0,0,0.1)'
                    : 'rgba(255,255,255,0.1)'};
    }
`

const BlipOptions = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1rem;
    padding: 0 1rem;
    justify-content: space-between;

    div,
    p {
        cursor: pointer;
    }
`

const BlipsDate = styled.p.attrs({
    className: 'text-muted',
})`
    font-size: 0.85rem;
    font-weight: bold;
`

const Blip = styled.p.attrs({
    id: 'blip',
})`
    margin: 10px 0;
`

const BlipRandom = styled.img.attrs(({ theme }) => ({
    src:
        theme.bgColor === '#1A1A1A'
            ? '/images/randomWhite.png'
            : '/images/randomBlack.png',
}))`
    transition: all 500ms ease-in;

    ${BlipOptions} div:hover & {
        transform: rotate(-360deg);
    }
`

export {
    BlipsPage,
    BlipArea,
    BlipCardWrapper,
    BlipOptions,
    BlipsDate,
    Blip,
    BlipRandom,
}
