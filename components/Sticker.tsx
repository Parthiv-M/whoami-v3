import { useEffect } from 'react'
import { Sticker } from '../styles/filesystem'

export default function StickerHeader(props: any) {
    useEffect(() => {
        const el = document.querySelector('.' + props.id + '-to-observe')
        const observer = new IntersectionObserver(
            ([e]) =>
                document
                    .querySelector('.' + props.id + '-sticker')
                    .classList.toggle('is-pinned', e.intersectionRatio < 1),
            { threshold: [1] }
        )

        observer.observe(el)
    }, [])

    return (
        <>
            <div
                className={props.id + '-to-observe'}
                style={{ height: '1px', visibility: 'hidden' }}
            ></div>
            <Sticker className={props.id + '-sticker'}>
                {props?.children}
            </Sticker>
        </>
    )
}
