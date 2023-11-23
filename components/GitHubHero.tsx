import {
    SiFramer,
    SiGnubash,
    SiGo,
    SiHandlebarsdotjs,
    SiInternetarchive,
    SiMongodb,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiPhp,
    SiPm2,
    SiPrisma,
    SiPython,
    SiSymfony,
    SiTailwindcss,
    SiWikidata,
    SiWikimediacommons,
    SiWireshark,
} from '@icons-pack/react-simple-icons'
import {
    ContentTainer,
    GitHubHeader,
    GitHubImage,
    GitHubSubDiv,
    GitHubSubText,
    HeroSection,
    ProjectDescriptionHeader,
    ProjectLinkArea,
    ProjectLinkDescription,
} from '../styles/githubhero'

export default function GitHubHero() {
    const handleEnter = (e: any, idName: string) => {
        e.preventDefault()
        if (window.innerWidth > 768) {
            document
                .querySelector('#' + idName)
                .setAttribute('style', 'display: block')
        }
    }
    const handleLeave = (e: any, idName: string) => {
        e.preventDefault()
        if (window.innerWidth > 768) {
            document
                .querySelector('#' + idName)
                .setAttribute('style', 'display: none')
        }
    }
    return (
        <HeroSection id="tech">
            <ContentTainer>
                <GitHubImage />
                <GitHubSubDiv>
                    <GitHubHeader>
                        <a href="https://github.com/parthiv-m" target="_blank">
                            GitHub
                            <span>&#10509;</span>
                        </a>
                    </GitHubHeader>
                    <GitHubSubText>is where I keep</GitHubSubText>
                    <GitHubSubText>track of my tech projects</GitHubSubText>
                    <ProjectLinkArea className="mt-3">
                        <div className="position-relative">
                            <a
                                href="https://github.com/parthiv-m/sea-shell"
                                onMouseEnter={(e) =>
                                    handleEnter(e, 'sea-shell')
                                }
                                onMouseLeave={(e) =>
                                    handleLeave(e, 'sea-shell')
                                }
                            >
                                sea-shell
                            </a>
                            <ProjectLinkDescription id="sea-shell">
                                <ProjectDescriptionHeader>
                                    <h6>sea-shell</h6>
                                    <div className="d-flex gap-1">
                                        <SiPython size={16} />
                                        <SiGnubash size={16} />
                                    </div>
                                </ProjectDescriptionHeader>
                                <p className="mt-3">
                                    A custom Lost-at-Sea themed Linux shell that
                                    contains several default Linux commands as
                                    well as a few custom commands
                                </p>
                            </ProjectLinkDescription>
                        </div>
                        <div className="position-relative">
                            <a
                                href="https://github.com/parthiv-m/the-hand-outer"
                                onMouseEnter={(e) =>
                                    handleEnter(e, 'the-hand-outer')
                                }
                                onMouseLeave={(e) =>
                                    handleLeave(e, 'the-hand-outer')
                                }
                            >
                                the-hand-outer
                            </a>
                            <ProjectLinkDescription id="the-hand-outer">
                                <ProjectDescriptionHeader>
                                    <h6>the-hand-outer</h6>
                                    <div className="d-flex gap-1">
                                        <SiNodedotjs size={16} />
                                        <SiHandlebarsdotjs size={16} />
                                    </div>
                                </ProjectDescriptionHeader>
                                <p className="mt-3">
                                    Created an automated newsletter distributor
                                    that doles out copies of a newsletter (with
                                    a new punch-line every time) to subscribers
                                    from a database
                                </p>
                            </ProjectLinkDescription>
                        </div>
                        <div className="position-relative">
                            <a
                                href="https://github.com/parthiv-m/tr-stat-update"
                                onMouseEnter={(e) =>
                                    handleEnter(e, 'tcp-filter')
                                }
                                onMouseLeave={(e) =>
                                    handleLeave(e, 'tcp-filter')
                                }
                            >
                                tcp-filter
                            </a>
                            <ProjectLinkDescription id="tcp-filter">
                                <ProjectDescriptionHeader>
                                    <h6>tcp-filter</h6>
                                    <div className="d-flex gap-1">
                                        <SiPython size={16} />
                                        <SiWireshark size={16} />
                                    </div>
                                </ProjectDescriptionHeader>
                                <p className="mt-3">
                                    A simple command line application that lets
                                    a user obtain information about packets
                                    filtered according to any of the TCP header
                                    flags
                                </p>
                            </ProjectLinkDescription>
                        </div>
                        <div className="position-relative">
                            <a
                                href="https://github.com/parthiv-m/wearemist-v4"
                                onMouseEnter={(e) =>
                                    handleEnter(e, 'wearemist-v4')
                                }
                                onMouseLeave={(e) =>
                                    handleLeave(e, 'wearemist-v4')
                                }
                            >
                                wearemist-v4
                            </a>
                            <ProjectLinkDescription id="wearemist-v4">
                                <ProjectDescriptionHeader>
                                    <h6>wearemist-v4</h6>
                                    <div className="d-flex gap-1">
                                        <SiNextdotjs size={16} />
                                        <SiTailwindcss size={16} />
                                        <SiFramer size={16} />
                                    </div>
                                </ProjectDescriptionHeader>
                                <p className="mt-3">
                                    Designed and built the fourth version of the
                                    website, as well as helped build and
                                    maintain several sister sites—including the
                                    events portal and the cybermanipal page, all
                                    of which are linked from the main website
                                </p>
                            </ProjectLinkDescription>
                        </div>
                        <div className="position-relative">
                            <a
                                href="https://github.com/parthiv-m/project-anant"
                                onMouseEnter={(e) =>
                                    handleEnter(e, 'project-anant')
                                }
                                onMouseLeave={(e) =>
                                    handleLeave(e, 'project-anant')
                                }
                            >
                                project-anant
                            </a>
                            <ProjectLinkDescription id="project-anant">
                                <ProjectDescriptionHeader>
                                    <h6>project-anant</h6>
                                    <div className="d-flex gap-1">
                                        <SiNextdotjs size={16} />
                                        <SiTailwindcss size={16} />
                                        <SiPrisma size={16} />
                                    </div>
                                </ProjectDescriptionHeader>
                                <p className="mt-3">
                                    The frontend of the dashboard developed to
                                    host an open-access online repository of
                                    functional materials for IISc Bangalore
                                </p>
                            </ProjectLinkDescription>
                        </div>
                        <div className="position-relative">
                            <a
                                href="https://github.com/parthiv-m/project-anant-backend"
                                onMouseEnter={(e) =>
                                    handleEnter(e, 'project-anant-backend')
                                }
                                onMouseLeave={(e) =>
                                    handleLeave(e, 'project-anant-backend')
                                }
                            >
                                project-anant-backend
                            </a>
                            <ProjectLinkDescription id="project-anant-backend">
                                <ProjectDescriptionHeader>
                                    <h6>project-anant-backend</h6>
                                    <div className="d-flex gap-1">
                                        <SiNodedotjs size={16} />
                                        <SiMongodb size={16} />
                                        <SiPm2 size={16} />
                                        <SiNginx size={16} />
                                    </div>
                                </ProjectDescriptionHeader>
                                <p className="mt-3">
                                    The API and backend functions of the
                                    dashboard developed to host an open-access
                                    online repository of functional materials
                                    for IISc Bangalore
                                </p>
                            </ProjectLinkDescription>
                        </div>
                        <div className="position-relative">
                            <a
                                href="https://github.com/parthiv-m/wikimedia-ocr"
                                onMouseEnter={(e) =>
                                    handleEnter(e, 'wikimedia-ocr')
                                }
                                onMouseLeave={(e) =>
                                    handleLeave(e, 'wikimedia-ocr')
                                }
                            >
                                wikimedia-ocr
                            </a>
                            <ProjectLinkDescription id="wikimedia-ocr">
                                <ProjectDescriptionHeader>
                                    <h6>wikimedia-ocr</h6>
                                    <div className="d-flex gap-1">
                                        <SiPhp size={16} />
                                        <SiSymfony size={16} />
                                    </div>
                                </ProjectDescriptionHeader>
                                <p className="mt-3">
                                    A web service and UI for providing OCR text
                                    from images hosted on MediaWiki wikis with
                                    three OCR engines
                                </p>
                            </ProjectLinkDescription>
                        </div>
                        <div className="position-relative">
                            <a
                                href="https://github.com/parthiv-m/bub2"
                                onMouseEnter={(e) => handleEnter(e, 'bub2')}
                                onMouseLeave={(e) => handleLeave(e, 'bub2')}
                            >
                                book-uploader-bot-v2
                            </a>
                            <ProjectLinkDescription id="bub2">
                                <ProjectDescriptionHeader>
                                    <h6>book-uploader-bot-v2</h6>
                                    <div className="d-flex gap-1">
                                        <SiNextdotjs size={16} />
                                        <SiInternetarchive size={16} />
                                        <SiWikimediacommons size={16} />
                                        <SiWikidata size={16} />
                                    </div>
                                </ProjectDescriptionHeader>
                                <p className="mt-3">
                                    A book uploader bot that transfers documents
                                    from public libraries such as Google Books,
                                    Punjab Digital Library, and Trove Digital
                                    Library to Internet Archive
                                </p>
                            </ProjectLinkDescription>
                        </div>
                        <div className="position-relative">
                            <a
                                href="https://github.com/parthiv-m/tr-stat-update"
                                onMouseEnter={(e) =>
                                    handleEnter(e, 'tr-stat-update')
                                }
                                onMouseLeave={(e) =>
                                    handleLeave(e, 'tr-stat-update')
                                }
                            >
                                tr-stat-update
                            </a>
                            <ProjectLinkDescription id="tr-stat-update">
                                <ProjectDescriptionHeader>
                                    <h6>tr-stat-update</h6>
                                    <div className="d-flex gap-1">
                                        <SiGo size={16} />
                                        <SiWikimediacommons size={16} />
                                    </div>
                                </ProjectDescriptionHeader>
                                <p className="mt-3">
                                    Wrote a Go script that automates the process
                                    of updating a Wikimedia Commons page with
                                    the remaining amount of Transkribus credits
                                    left for the Wikimedia account
                                </p>
                            </ProjectLinkDescription>
                        </div>
                    </ProjectLinkArea>
                </GitHubSubDiv>
            </ContentTainer>
        </HeroSection>
    )
}
