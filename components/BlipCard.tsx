import { useEffect } from 'react'
import { Blip, BlipCardWrapper, BlipsDate } from '../styles/blips'

export default function BlipCard(props: any) {
    useEffect(() => {
        const blip = document.querySelector<HTMLParagraphElement>('#blip')
        if (props?.blip?.length < 40) {
            blip.style.fontSize = '2rem'
            blip.style.lineHeight = '2rem'
        } else if (props?.blip?.length > 40 && props?.blip.length < 100) {
            blip.style.fontSize = '1.5rem'
            blip.style.lineHeight = '1.5rem'
        } else {
            blip.style.fontSize = '1rem'
            blip.style.lineHeight = '1.1rem'
        }
    }, [props?.blip])

    const blipDate = new Date(props?.date)

    return (
        <BlipCardWrapper>
            <BlipsDate>
                {blipDate.getHours() +
                    ':' +
                    blipDate.getMinutes() +
                    ', ' +
                    blipDate.getDate() +
                    ' ' +
                    blipDate.toLocaleString('default', { month: 'long' }) +
                    ' ' +
                    blipDate.getFullYear()}
            </BlipsDate>
            <Blip>{props?.blip}</Blip>
            <p className="text-muted">blips • theproton</p>
        </BlipCardWrapper>
    )
}
