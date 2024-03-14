import { useEffect, useState } from 'react'
import supabase from '../utils/supabase'
import {
    BlipArea,
    BlipBackground,
    BlipOptions,
    BlipRandom,
    BlipsPage,
} from '../styles/blips'
import BlipCard from '../components/BlipCard'

export default function Blips() {
    const [blips, setBlips] = useState(null)
    const [isLatest, setLatest] = useState(true)
    const [chosenBlip, setChosenBlip] = useState(null)

    const setLatestBlip = (blipsData: any = blips) => {
        setChosenBlip(blipsData[blipsData.length - 1])
        setLatest(true)
    }

    const fetchBlipsData = async () => {
        const { data: blipsData } = await supabase
            .from('blips')
            .select()
            .order('date', { ascending: true })
        setBlips(blipsData)
        setLatestBlip(blipsData)
    }

    const randomBlip: any = () => {
        return blips[Math.floor(Math.random() * blips.length)]
    }

    const handleRandomize = () => {
        setChosenBlip(randomBlip())
        setLatest(false)
    }

    useEffect(() => {
        fetchBlipsData()
    }, [])

    return (
        <BlipsPage>
            <BlipBackground>
                <h1>
                    blips<span>...</span>
                </h1>
            </BlipBackground>
            <BlipArea>
                {chosenBlip && (
                    <>
                        <BlipCard
                            date={chosenBlip.date}
                            blip={chosenBlip.blip}
                        />
                        <BlipOptions>
                            <div
                                className="d-flex align-items-center gap-1"
                                onClick={handleRandomize}
                            >
                                <BlipRandom height={15} />
                                Randomize
                            </div>
                            <p
                                onClick={(e) => {
                                    !isLatest && setLatestBlip()
                                }}
                                className={`${
                                    isLatest && 'text-muted pe-none'
                                }`}
                            >
                                ~ Latest
                            </p>
                        </BlipOptions>
                    </>
                )}
            </BlipArea>
        </BlipsPage>
    )
}
