import { useEffect } from 'react'
import { Sticker } from '../styles/filesystem'

export default function StickerHeader(props: any) {
    return (
        <>
            <Sticker id={props.id} className={props.id + '-sticker'}>
                {props?.children}
            </Sticker>
        </>
    )
}
