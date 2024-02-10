import styled from 'styled-components'

const OrgsSection = styled.div`
    width: 75%;
    margin: 0 auto;
    border-radius: 15px;
    position: relative;
    z-index: 10;
    padding: 2rem;
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0,0,0,0.1)'
            : 'rgba(255,255,255,0.1)'};

    h5 {
        text-align: right;
        font-weight: bold;
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 768px) {
        width: 90%;
    }
`

const OrgCards = styled.div`
    display: flex;
    flex-flow: wrap;
    gap: 1rem;
    margin-top: 1rem;
`

const OrgCard = styled.div`
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0,0,0,0.1)'
            : 'rgba(255,255,255,0.1)'};
    padding: 0.5rem 1rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    &: hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

const OrgCardArrow = styled.img.attrs(({ theme }) => ({
    src:
        theme.bgColor === '#1A1A1A'
            ? '/icons/arrow-right-light.svg'
            : '/icons/arrow-right-dark.svg',
}))`
    height: 20px;
`

export { OrgsSection, OrgCards, OrgCard, OrgCardArrow }
