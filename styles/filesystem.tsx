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

const FileSystemWrapper = styled.div<{ withBackground: boolean }>`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background: ${({ theme, withBackground }) =>
        withBackground
            ? theme.bgColor === '#FFEBF7'
                ? 'rgba(0,0,0,0.05)'
                : 'rgba(0,0,0,0.2)'
            : ''};

    @media only screen and (max-width: 768px) {
        background: ${({ theme }) =>
            theme.bgColor === '#FFEBF7'
                ? 'rgba(0,0,0,0.05)'
                : 'rgba(0,0,0,0.2)'};
    }
`

const FileSystem = styled.div`
    display: flex;
    justify-content: center;
`

const FileSystemLocation = styled.div<{ verbose: boolean }>`
    width: fit-content;
    display: flex;
    align-items: center;
    align-self: start;
    margin: 0 10px;
    gap: 5px;
    padding: ${({ verbose }) => (verbose ? '5px 10px' : '0')};
    border: ${({ verbose, theme }) =>
        verbose
            ? '1px solid ' +
              (theme.bgColor === '#FFEBF7'
                  ? 'rgba(0,0,0,0.3)'
                  : 'rgba(255,255,255,0.5)')
            : 'none'};
    border-radius: 30px;
    font-size: small;
`

const LocationDot = styled.span`
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7'
            ? 'rgba(0,0,0,0.3)'
            : 'rgba(255,255,255,0.5)'};
`

const FileSystemHeader = styled.div`
    width: 100%;
    padding: 0 10px;

    h4 {
        font-size: 2rem;
        font-weight: bold;
        color: #ff0844;
        opacity: 0.7;

        ${FileSystemWrapper}:hover & {
            opacity: 1;
        }
    }

    @media only screen and (max-width: 768px) {
        h4 {
            font-size: 1.5rem;
        }
    }

    @media only screen and (max-width: 1024px) {
        h4 {
            font-size: 1.5rem;
        }
    }
`

const FileSystemPosition = styled.p`
    margin-left: 10px;
    font-size: large;

    span {
        opacity: 0.4;
    }
`

const FileSystemLeft = styled.div`
    width: 10px;
    padding: 10px;
`

const FileSystemRight = styled.div`
    width: 100%;
    padding: 10px;

    p {
        line-height: 1.1rem;
    }

    @media only screen and (max-width: 768px) {
        p {
            line-height: 1.2rem;
        }
    }
`

const FileSystemLine = styled.div<{ cusHeight: number }>`
    height: ${({ cusHeight }) => cusHeight + 18}px;
    width: 2px;
    margin: 1px 0;
    background: ${({ theme }) =>
        theme.bgColor === '#FFEBF7' ? '#1A1A1A' : '#FFEBF7'};
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
        theme.bgColor === '#FFEBF7' ? '#1A1A1A' : '#FFEBF7'};
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
    FileSystemLocation,
    LocationDot,
    FileSystemHeader,
    FileSystemPosition,
    FileSystemLeft,
    FileSystemRight,
    FileSystemLine,
    FileSystemVerticals,
    FileSystemButton,
    FileName,
}
