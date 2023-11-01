import styled from 'styled-components'

const FileSystemHolder = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        gap: 8px;
    }
`

const FileSystemWrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7' ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.2)'};
`

const FileSystem = styled.div`
    display: flex;
    justify-content: center;
`

const FileSystemHeader = styled.div`
    width: 100%;
    padding: 0 10px;

    h4 {
        font-size: 2rem;
        font-weight: bold;
        color: #ff0844;
    }

    @media only screen and (max-width: 768px) {
        h4 {
            font-size: 1.5rem;
        }
    }
`

const FileSystemLeft = styled.div`
    width: 10px;
    padding: 10px;
`

const FileSystemRight = styled.div`
    width: 100%;
    padding: 10px;
`

const FileSystemLine = styled.div<{ cusHeight: number }>`
    height: ${({ cusHeight }) => cusHeight + 18}px;
    width: 2px;
    margin: 1px 0;
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? theme.colors.secondary
            : theme.colors.primary};
`

const FileSystemVerticals = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FileSystemButton = styled.div`
    border-radius: 50%;
    height: 7px;
    width: 7px;
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? theme.colors.secondary
            : theme.colors.primary};
`

const FileName = styled.h6`
    color: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0,0,0,0.8)'
            : 'rgba(255,255,255,0.8)'};
    font-weight: bold;
`

export {
    FileSystemHolder,
    FileSystemWrapper,
    FileSystem,
    FileSystemHeader,
    FileSystemLeft,
    FileSystemRight,
    FileSystemLine,
    FileSystemVerticals,
    FileSystemButton,
    FileName,
}
