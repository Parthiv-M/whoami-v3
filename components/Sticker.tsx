import { useEffect } from 'react'
import { Sticker } from '../styles/filesystem'

export default function StickerHeader(props: any) {
    return (
        <>
            <Sticker className={props.id + '-sticker'}>
                {props?.children}
            </Sticker>
        </>
    )
}
