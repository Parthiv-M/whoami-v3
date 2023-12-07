import { useEffect } from 'react'
import {
    ArtCard,
    ArtMetaDataWrapper,
    ArtWrapper,
    ByLine,
    Overlay,
    RefreshButton,
    RefreshCard,
    SwiperArea,
    SwiperCard,
} from '../styles/art'

export default function ArtPage() {
    const supabaseBucketBase =
        process.env.NEXT_PUBLIC_SUPABASE_URL +
        '/storage/v1/object/public/theprotonart/'

    const initCards = () => {
        var artCards = document.querySelector<HTMLElement>('.art-cards')
        var allCards = document.querySelectorAll<HTMLElement>('.swipey-card')
        var newCards = document.querySelectorAll<HTMLElement>(
            '.swipey-card:not(.removed)'
        )
        newCards.forEach((card: HTMLElement, index: number) => {
            card.style.zIndex = (allCards.length - index).toString()
            card.style.transform =
                'scale(' +
                (20 - index) / 20 +
                ') translateY(-' +
                20 * index +
                'px)'
            card.style.opacity = ((10 - index) / 10).toString()
        })

        artCards?.classList.add('loaded')
    }

    const seeAgain = () => {
        var allCards = document.querySelectorAll<HTMLElement>('.swipey-card')
        allCards?.forEach((element: HTMLElement) => {
            element?.classList.remove('removed')
            initCards()
        })
    }

    useEffect(() => {
        var allCards = document.querySelectorAll<HTMLElement>('.swipey-card')
        initCards()
        allCards.forEach((el: HTMLElement) => {
            var hammertime = new Hammer(el)

            hammertime.on('pan', function (event: any) {
                el.classList.add('moving')
            })

            hammertime.on('pan', function (event: any) {
                if (event.deltaX === 0) return
                if (event.center.x === 0 && event.center.y === 0) return

                var xMulti = event.deltaX * 0.03
                var yMulti = event.deltaY / 80
                var rotate = xMulti * yMulti

                event.target.style.transform =
                    'translate(' +
                    event.deltaX +
                    'px, ' +
                    event.deltaY +
                    'px) rotate(' +
                    rotate +
                    'deg)'
            })

            hammertime.on('panend', function (event: any) {
                el.classList.remove('moving')

                var moveOutWidth = document.body.clientWidth
                var keep =
                    Math.abs(event.deltaX) < 80 ||
                    Math.abs(event.velocityX) < 0.5

                event.target.classList.toggle('removed', !keep)

                if (keep) {
                    event.target.style.transform = ''
                } else {
                    var endX = Math.max(
                        Math.abs(event.velocityX) * moveOutWidth,
                        moveOutWidth
                    )
                    var toX = event.deltaX > 0 ? endX : -endX
                    var endY = Math.abs(event.velocityY) * moveOutWidth
                    var toY = event.deltaY > 0 ? endY : -endY
                    var xMulti = event.deltaX * 0.03
                    var yMulti = event.deltaY / 80
                    var rotate = xMulti * yMulti

                    event.target.style.transform =
                        'translate(' +
                        toX +
                        'px, ' +
                        (toY + event.deltaY) +
                        'px) rotate(' +
                        rotate +
                        'deg)'
                    initCards()
                }
            })
        })
    }, [])

    return (
        <ArtWrapper>
            <Overlay>
                <ArtMetaDataWrapper>
                    <h2>Artworks</h2>
                    <p>
                        I engross myself in sketching, painting, or even
                        doodling out characters, places, people, or objects. It
                        has been a hobby of mine ever since I remember.
                    </p>
                    <img
                        height={80}
                        width={100}
                        src="/images/theProtonVector.png"
                    />
                </ArtMetaDataWrapper>
                <ArtCard>
                    <SwiperArea>
                        {[
                            supabaseBucketBase + 'afghan.png',
                            supabaseBucketBase + 'dancer.png',
                            supabaseBucketBase + 'dobby.png',
                            supabaseBucketBase + 'harry.png',
                            supabaseBucketBase + 'telephone.png',
                            supabaseBucketBase + 'tiger_colour.png',
                        ].map((artwork: string, index: number) => {
                            return (
                                <SwiperCard key={index}>
                                    <img alt="Artwork" src={artwork} />
                                    <ByLine>- Parthiv Menon -</ByLine>
                                </SwiperCard>
                            )
                        })}
                        <RefreshCard>
                            <div className="d-flex flex-column mx-auto h-100 justify-content-center align-items-center">
                                <div className="go-see-again">
                                    <p>
                                        {' '}
                                        While I work on newer sketches, why
                                        don&apos;t you go see the older ones again?
                                    </p>
                                </div>
                                <RefreshButton onClick={seeAgain}>
                                    <p>See it again</p>
                                </RefreshButton>
                            </div>
                        </RefreshCard>
                    </SwiperArea>
                </ArtCard>
            </Overlay>
        </ArtWrapper>
    )
}
