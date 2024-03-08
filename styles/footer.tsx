import styled from 'styled-components'

const FooterBottom = styled.footer`
    padding: 4rem 0 3rem;
    width: 75%;
    margin: 0 auto;
    position: relative;
    z-index: 10;

    p {
        margin-top: 5px;
        width: 30%;
        opacity: 0.5;
        line-height: 1.2;

        @media only screen and (max-width: 768px) {
            width: 90%;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 90%;
        padding-bottom: 7rem;
    }
`

const FooterBranding = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0,0,0,0.2)'
            : 'rgba(255,255,255,0.2)'};
    font-family: Verdana;
`

const FooterLinks = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;

    @media only screen and (max-width: 768px) {
        width: 90%;
        gap: 0 50px;
        grid-template-columns: auto auto;
    }
`

const FooterLinkColumn = styled.div`
    padding: 10px 0px;
`

const FooterColumnHead = styled.h6`
    font-size: 1.1rem;
    letter-spacing: 2px;
    color: #ff0844;
    opacity: 0.7;
`

const FooterLink = styled.a`
    display: block;
    margin-top: 10px;
    &:hover {
        color: inherit;
        text-decoration: underline;
    }
`

export {
    FooterBottom,
    FooterBranding,
    FooterLinks,
    FooterLinkColumn,
    FooterColumnHead,
    FooterLink,
}
