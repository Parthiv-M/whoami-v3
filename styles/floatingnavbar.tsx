import styled from 'styled-components'

const Floater = styled.nav`
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(255,255,255,0.6)'
            : 'rgba(0,0,0,0.6)'};
    width: 50%;
    padding: 15px;
    position: fixed;
    top: 10px;
    border-radius: 24px;
    z-index: 100;
    translate: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid transparent;
    backdrop-filter: blur(50px);

    &:hover {
        background-image: linear-gradient(220deg, #ff0844 0%, #ffb199 100%);
        /* Fill the inside with white */
        background-origin: border-box;
        box-shadow: inset 0 100vw
            ${({ theme }) => (theme.bgColor === '#FFEBF7' ? 'white' : 'black')};
        /* A transparent border, so the very edge of the button shows through */
        border: 1px solid transparent;
    }

    @media only screen and (max-width: 768px) {
        width: 90%;
        position: fixed;
        height: fit-content;
        translate: 5%;
        bottom: 20px;
        top: auto;
        background-image: linear-gradient(220deg, #ff0844 0%, #ffb199 100%);
        /* Fill the inside with white */
        background-origin: border-box;
        box-shadow: inset 0 100vw
            ${({ theme }) => (theme.bgColor === '#FFEBF7' ? 'white' : 'black')};
        /* A transparent border, so the very edge of the button shows through */
        border: 1px solid transparent;
    }
`

const FloaterPM = styled.a.attrs({
    href: '/',
})`
    font-weight: bold;
    margin-left: 5px;
    background-image: linear-gradient(220deg, #ff0844 0%, #ffb199 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const FloaterLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    a {
        font-weight: bold;
        position: relative;
    }

    a::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        border-radius: 4px;
        background-color: #ff0844;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
    }

    a:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }

    a:hover {
        color: #ff0844;
    }
`

const FloatingSoon = styled.div`
    position: absolute;
    top: 20px;
    color: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0,0,0,0.6)'
            : 'rgba(255,255,255,0.1)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 500ms ease-in;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

const FloatingDash = styled.div`
    width: 1px;
    border: 1px dashed
        ${({ theme }) =>
            theme.bgColor === '#FFEBF7'
                ? 'rgba(0,0,0,0.4)'
                : 'rgba(255,255,255,0.1)'};
`

export { Floater, FloaterPM, FloaterLinks, FloatingSoon, FloatingDash }
