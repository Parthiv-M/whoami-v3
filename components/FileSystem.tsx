import { useEffect, useState } from 'react'
import {
    FileSystem,
    FileSystemLeft,
    FileSystemRight,
    FileSystemLine,
    FileSystemWrapper,
    FileSystemVerticals,
    FileSystemButton,
    FileSystemHeader,
    FileName,
    FileSystemLocation,
    LocationDot,
} from '../styles/filesystem'
import React from 'react'

export default function FileSystemBlock(props: any) {
    const [cusHeight, setCusHeight] = useState<any>([])
    useEffect(() => {
        let heights = []
        props.filesArray.map((index: any) => {
            heights.push(
                document.querySelector('#' + index.fileId)?.clientHeight
            )
        })
        setCusHeight(heights)
    }, [props.filesArray])
    return (
        <FileSystemWrapper withBackground={props.withBackground}>
            {props?.isImage ? (
                <div
                    style={{ height: '500px' }}
                    className="d-md-flex d-none w-100 d-flex justify-content-center align-items-center"
                >
                    <img src={props?.imageUrl} style={{ width: '60%' }} />
                </div>
            ) : (
                <React.Fragment>
                    <FileSystemLocation>
                        <LocationDot />
                        <p>{props?.location}</p>
                    </FileSystemLocation>
                    <FileSystemHeader>
                        <h4>{props.header}</h4>
                    </FileSystemHeader>
                    <FileSystem>
                        {props.filesArray.length > 1 && (
                            <FileSystemLeft>
                                <FileSystemVerticals>
                                    <FileSystemButton />
                                    {Array.from(
                                        Array(
                                            props.filesArray.length - 1
                                        ).keys()
                                    ).map((index) => {
                                        return (
                                            <>
                                                <FileSystemLine
                                                    key={index}
                                                    cusHeight={cusHeight[index]}
                                                />
                                                <FileSystemButton />
                                            </>
                                        )
                                    })}
                                </FileSystemVerticals>
                            </FileSystemLeft>
                        )}
                        <FileSystemRight>
                            {props.filesArray.map(
                                (file: any, index: number) => {
                                    return (
                                        <>
                                            <FileName
                                                style={{
                                                    marginTop:
                                                        index !== 0
                                                            ? '8px'
                                                            : '-5px',
                                                }}
                                            >
                                                {file.fileName}
                                            </FileName>
                                            <p
                                                className="text-muted"
                                                id={file.fileId}
                                            >
                                                {file.content}
                                            </p>
                                        </>
                                    )
                                }
                            )}
                        </FileSystemRight>
                    </FileSystem>
                </React.Fragment>
            )}
        </FileSystemWrapper>
    )
}
