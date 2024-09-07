import styled from 'styled-components'

const WritingWrapper = styled.div`
    min-height: 100vh;
    width: 60%;
    margin: 0 auto;
    padding-top: 7%;

    @media only screen and (max-width: 768px) {
        width: 90%;
    }
`

const WritingSection = styled.div`
    display: grid;
    grid-template-columns: 25% 75%;
    margin-top: 1rem;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 20% 80%;
    }
`

const WritingSideBar = styled.div`
    min-width: 30px;
    max-width: 100%;
    padding: 10px;

    a:hover {
        color: inherit;
    }

    a:not(:first-child) {
        margin-top: 5px;
    }
`

const WritingList = styled.div`
    width: 100%;
    padding: 10px;

    a {
        display: block;
    }

    a:not(:first-child) {
        margin-top: 10px;
    }

    a:hover {
        color: inherit;
    }
`

const WritingSideBarItem = styled.a<{ active: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0,0,0,0.05)'
            : 'rgba(0,0,0,0.7)'};
    border-radius: 10px;
    border: solid 1px ${({ theme, active }) => active ? "#ff0844" : "transparent"};

    &:hover {
        opacity: 0.8;
    }

    @media only screen and (max-width: 768px) {
        justify-content: center;
        p:nth-child(2) {
            display: none;
        }
    }
`

const WritingListItem = styled.div`
    padding: 15px;
    border-radius: 10px;
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0,0,0,0.02)'
            : 'rgba(255,255,255,0.1)'};
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    p {
        margin-top: 5px;
        color: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0,0,0,0.5)'
            : 'rgba(255,255,255,0.6)'};
    }
`

const WritingListItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p {
        font-size: 12px;
        padding: 2px 5px;
        border-radius: 5px;
        margin-left: 2px;
        color: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0,0,0,0.5)'
            : 'rgba(255,255,255,0.6)'};
    }
`

const MarkdownWriting = styled.div`
    p {
        margin-top: 10px;
        line-height: 20px;
        opacity: 0.9;
    }
`

const WriteTitle = styled.h1`
    font-size: 2rem;
    margin-top: 10px;
`;

const WriteCrumb = styled.pre`
    font-size: 0.9rem;
    color: #ff0844;

    a:hover {
        text-decoration: underline;
        color: inherit;
    }

`

export { WritingWrapper, WritingSection, WritingSideBar, WritingList, WritingSideBarItem, WritingListItem, WritingListItemHeader, MarkdownWriting, WriteTitle, WriteCrumb }
