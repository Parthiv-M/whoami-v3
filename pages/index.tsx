import {
    LandingWrapper,
    LandingPhoto,
    LandingName,
    LandingDescription,
    LandingIconTray,
    LandingTheProton,
    SubSectionHeader,
} from '../styles/landingstyles'
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAmazonaws,
    SiC,
    SiCss3,
    SiDjango,
    SiDocker,
    SiDribbble,
    SiFigma,
    SiFirebase,
    SiGit,
    SiGithub,
    SiGmail,
    SiGo,
    SiGooglescholar,
    SiHtml5,
    SiInstagram,
    SiLinkedin,
    SiMongodb,
    SiMongoose,
    SiMysql,
    SiNetlify,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiPhp,
    SiPostman,
    SiPython,
    SiReact,
    SiTypescript,
    SiVercel,
    SiWordpress,
} from '@icons-pack/react-simple-icons'
import {
    IconsCascade,
    SkillCascadeCard,
    SkillsWrapper,
} from '../styles/skillsstyles'
import IconWithTooltip from '../components/IconWithTooltip'
import GitHubHero from '../components/GitHubHero'
import FileSystemBlock from '../components/FileSystem'
import { FileSystemHolder } from '../styles/filesystem'
import { ResumeButton, ResumeSection } from '../styles/resume'
import { useEffect, useState } from 'react'
import {
    MoreCard,
    MoreCardHeader,
    MoreCards,
    MoreSection,
    MoreCardArrow,
} from '../styles/moresection'
import { OrgCard, OrgCardArrow, OrgCards, OrgsSection } from '../styles/orgs'
import Head from 'next/head'

export default function Index(props: any) {
    const [json, setjson] = useState(null)
    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setjson(data))
    }, [])

    return (
        <div>
            <Head>
                <title>Parthiv Menon | theproton</title>
            </Head>
            <LandingWrapper style={{}}>
                <div className="w-md-75 w-100 mx-auto row p-5">
                    <div className="col-md-5 text-md-end text-center">
                        <LandingPhoto />
                    </div>
                    <div className="col-md-7 text-center text-md-start">
                        <h6 className="display-6 text-muted fw-bold m-md-0 mt-2">
                            <LandingTheProton>
                                @
                                <span className="font-monospace">
                                    theproton
                                </span>
                            </LandingTheProton>
                        </h6>
                        <LandingName className="lh-1 fw-bolder">
                            Parthiv Menon
                        </LandingName>
                        <LandingDescription className="lh-sm text-muted">
                            Passionate fullstack developer and open-source
                            enthusiast who loves brainstorming ideas, Holmes,
                            and playing sports. Also, an avid reader, artist,
                            and writer of poetry, prose and stories.
                        </LandingDescription>
                        <LandingIconTray>
                            <a
                                href="https://github.com/parthiv-m"
                                target="_blank"
                            >
                                <SiGithub size={20} />
                            </a>
                            <a
                                href="https://scholar.google.com/citations?user=04re_2oAAAAJ&hl=en&oi=ao"
                                target="_blank"
                            >
                                <SiGooglescholar size={20} />
                            </a>
                            <a
                                href="https://dribbble.com/theProton"
                                target="_blank"
                            >
                                <SiDribbble size={20} />
                            </a>
                            <a
                                href="mailto:parthivmenon01@gmail.com"
                                target="_blank"
                            >
                                <SiGmail size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/parthivmenon"
                                target="_blank"
                            >
                                <SiLinkedin size={20} />
                            </a>
                            <a
                                href="https://instagram.com/_.parthiv_"
                                target="_blank"
                            >
                                <SiInstagram size={20} />
                            </a>
                        </LandingIconTray>
                    </div>
                </div>
            </LandingWrapper>
            <SkillsWrapper>
                <div className="generic-container mx-auto row p-md-5 p-4">
                    <SkillCascadeCard>
                        <IconsCascade>
                            <h1>Design</h1>
                            <div className="d-flex flex-wrap gap-2">
                                <IconWithTooltip
                                    toolTipText="Figma"
                                    icon={SiFigma}
                                />
                                <IconWithTooltip
                                    toolTipText="Adobe Illustrator"
                                    icon={SiAdobeillustrator}
                                />
                                <IconWithTooltip
                                    toolTipText="Adobe Photoshop"
                                    icon={SiAdobephotoshop}
                                />
                            </div>
                        </IconsCascade>
                        <p className="text-muted">{json?.design}</p>
                    </SkillCascadeCard>
                    <SkillCascadeCard>
                        <IconsCascade>
                            <h1>Code</h1>
                            <div className="d-flex flex-wrap gap-2">
                                <IconWithTooltip
                                    toolTipText="C Language"
                                    icon={SiC}
                                />
                                <IconWithTooltip
                                    toolTipText="Python"
                                    icon={SiPython}
                                />
                                <IconWithTooltip
                                    toolTipText="HTML"
                                    icon={SiHtml5}
                                />
                                <IconWithTooltip
                                    toolTipText="CSS"
                                    icon={SiCss3}
                                />
                                <IconWithTooltip
                                    toolTipText="Typescript"
                                    icon={SiTypescript}
                                />
                                <IconWithTooltip
                                    toolTipText="NodeJS"
                                    icon={SiNodedotjs}
                                />
                                <IconWithTooltip
                                    toolTipText="Golang"
                                    icon={SiGo}
                                />
                                <IconWithTooltip
                                    toolTipText="PHP"
                                    icon={SiPhp}
                                />
                                <IconWithTooltip
                                    toolTipText="Django"
                                    icon={SiDjango}
                                />
                                <IconWithTooltip
                                    toolTipText="ReactJS"
                                    icon={SiReact}
                                />
                                <IconWithTooltip
                                    toolTipText="NextJS"
                                    icon={SiNextdotjs}
                                />
                            </div>
                        </IconsCascade>
                        <p className="text-muted">{json?.code}</p>
                    </SkillCascadeCard>
                    <SkillCascadeCard>
                        <IconsCascade>
                            <h1>Deploy</h1>
                            <div className="d-flex flex-wrap gap-2">
                                <IconWithTooltip
                                    toolTipText="AWS"
                                    icon={SiAmazonaws}
                                />
                                <IconWithTooltip
                                    toolTipText="Vercel"
                                    icon={SiVercel}
                                />
                                <IconWithTooltip
                                    toolTipText="Netlify"
                                    icon={SiNetlify}
                                />
                                <IconWithTooltip
                                    toolTipText="Nginx"
                                    icon={SiNginx}
                                />
                                <IconWithTooltip
                                    toolTipText="Docker"
                                    icon={SiDocker}
                                />
                            </div>
                        </IconsCascade>
                        <p className="text-muted">{json?.deploy}</p>
                    </SkillCascadeCard>
                    <SkillCascadeCard>
                        <IconsCascade>
                            <h1>What else?</h1>
                            <div className="d-flex flex-wrap gap-2">
                                <IconWithTooltip
                                    toolTipText="Git"
                                    icon={SiGit}
                                />
                                <IconWithTooltip
                                    toolTipText="MongoDB"
                                    icon={SiMongodb}
                                />
                                <IconWithTooltip
                                    toolTipText="Mongoose"
                                    icon={SiMongoose}
                                />
                                <IconWithTooltip
                                    toolTipText="MySQL"
                                    icon={SiMysql}
                                />
                                <IconWithTooltip
                                    toolTipText="Postman"
                                    icon={SiPostman}
                                />
                                <IconWithTooltip
                                    toolTipText="Firebase"
                                    icon={SiFirebase}
                                />
                                <IconWithTooltip
                                    toolTipText="Wordpress"
                                    icon={SiWordpress}
                                />
                            </div>
                        </IconsCascade>
                        <p className="text-muted">{json?.whatelse}</p>
                    </SkillCascadeCard>
                </div>
            </SkillsWrapper>
            <GitHubHero />
            <div className={props?.verbose ? 'verbose' : 'minimal'}>
                {props?.verbose && (
                    <SubSectionHeader>
                        <h2>
                            I was very <span>active</span> in{' '}
                            <span>college</span> clubs...
                        </h2>
                    </SubSectionHeader>
                )}
                <div className="generic-container mx-auto d-flex flex-md-row flex-column gap-2">
                    <FileSystemHolder>
                        <FileSystemBlock
                            verbose={props?.verbose}
                            isImage={false}
                            fromTo={json?.clubs?.mist?.fromTo}
                            withBackground
                            header={'Manipal Information Security Team'}
                            location={json?.clubs?.mist?.location}
                            position={json?.clubs?.mist?.positionForMinimal}
                            otherPositions={json?.clubs?.mist?.otherPositions}
                            filesArray={[
                                {
                                    fileName: 'Web Development Head',
                                    fileId: 'web-dev-head',
                                    content: json?.clubs?.mist?.board,
                                },
                                {
                                    fileName: 'Organiser, Incognito 2021',
                                    fileId: 'incognito',
                                    content: json?.clubs?.mist?.incognito,
                                },
                                {
                                    fileName:
                                        'Developer and Organiser, Faceless',
                                    fileId: 'faceless',
                                    content: json?.clubs?.mist?.faceless,
                                },
                                {
                                    fileName: 'Management Committee member',
                                    fileId: 'mancomm',
                                    content: json?.clubs?.mist?.mancomm,
                                },
                            ]}
                        />
                        <FileSystemBlock
                            verbose={props?.verbose}
                            isImage={false}
                            fromTo={json?.clubs?.mitpost?.fromTo}
                            withBackground
                            header={'The MIT Post'}
                            location={json?.clubs?.mitpost?.location}
                            position={json?.clubs?.mitpost?.positionForMinimal}
                            otherPositions={json?.clubs?.mitpost?.otherPositions}
                            filesArray={[
                                {
                                    fileName: 'Revels and TechTatva',
                                    fileId: 'fests',
                                    content: json?.clubs?.mitpost?.fests,
                                },
                                {
                                    fileName: 'Head of Writing',
                                    fileId: 'board',
                                    content: json?.clubs?.mitpost?.board,
                                },
                                {
                                    fileName: 'Sub-Editor, Writing Department',
                                    fileId: 'subed',
                                    content: json?.clubs?.mitpost?.subed,
                                },
                                {
                                    fileName: 'Writer',
                                    fileId: 'writer',
                                    content: json?.clubs?.mitpost?.writer,
                                },
                            ]}
                        />
                    </FileSystemHolder>
                    <FileSystemHolder>
                        <FileSystemBlock
                            verbose={props?.verbose}
                            isImage={false}
                            header={"Linux Users' Group"}
                            fromTo={json?.clubs?.lug?.fromTo}
                            location={json?.clubs?.lug?.location}
                            position={json?.clubs?.lug?.positionForMinimal}
                            otherPositions={json?.clubs?.lug?.otherPositions}
                            filesArray={[
                                {
                                    fileName: 'Core Committee Member',
                                    fileId: 'core-committee',
                                    content: json?.clubs?.lug?.opensource,
                                },
                                {
                                    fileName: 'Install Fests',
                                    fileId: 'install-fests',
                                    content: json?.clubs?.lug?.installfest,
                                },
                            ]}
                        />
                        <FileSystemBlock
                            verbose={props?.verbose}
                            isImage={false}
                            withBackground
                            fromTo={json?.clubs?.ecell?.fromTo}
                            header={'Entrepreneurship Cell, Manipal'}
                            position={json?.clubs?.ecell?.positionForMinimal}
                            otherPositions={json?.clubs?.ecell?.otherPositions}
                            location={json?.clubs?.ecell?.location}
                            filesArray={[
                                {
                                    fileName:
                                        'Developer, Manipal Entrepreneurship Summit Website',
                                    fileId: 'mes',
                                    content: json?.clubs?.ecell?.mes,
                                },
                                {
                                    fileName:
                                        'Developer, Entrepreneurship Cell Website',
                                    fileId: 'ecell-web',
                                    content: json?.clubs?.ecell?.website,
                                },
                                {
                                    fileName: 'Executive, Content Team',
                                    fileId: 'content',
                                    content: json?.clubs?.ecell?.content,
                                },
                            ]}
                        />
                    </FileSystemHolder>
                </div>
                {props?.verbose && (
                    <SubSectionHeader>
                        <h2>
                            ...and got to <span>work</span> at some{' '}
                            <span>amazing</span> places...
                        </h2>
                    </SubSectionHeader>
                )}
                <div className="generic-container mx-auto d-flex flex-md-row flex-column gap-2">
                    <FileSystemHolder>
                        <FileSystemBlock
                            verbose={props?.verbose}
                            isImage={false}
                            fromTo={json?.work?.wmf?.fromTo}
                            header={'Wikimedia Foundation'}
                            location={json?.work?.wmf?.location}
                            position={json?.work?.wmf?.positionForMinimal}
                            otherPositions={json?.work?.wmf?.otherPositions}
                            filesArray={[
                                {
                                    fileName: 'Wikisource Technical Fellow',
                                    fileId: 'tech-fellow',
                                    content: json?.work?.wmf?.fellow,
                                },
                                {
                                    fileName:
                                        'Organiser, Wikisource Community Meetings',
                                    fileId: 'comm-meet',
                                    content: json?.work?.wmf?.commmeet,
                                },
                                {
                                    fileName:
                                        'Tech Contributor, Wiki-related projects',
                                    fileId: 'wiki-tech',
                                    content: json?.work?.wmf?.other,
                                },
                            ]}
                        />
                    </FileSystemHolder>
                    <FileSystemHolder>
                        <FileSystemBlock
                            verbose={props?.verbose}
                            isImage={false}
                            withBackground
                            fromTo={json?.work?.iisc?.fromTo}
                            header={'IISc Bangalore'}
                            location={json?.work?.iisc?.location}
                            position={json?.work?.iisc?.positionForMinimal}
                            otherPositions={json?.work?.iisc?.otherPositions}
                            filesArray={[
                                {
                                    fileName:
                                        'Full Stack Developer, Material Research Center',
                                    fileId: 'anant',
                                    content: json?.work?.iisc?.anant,
                                },
                            ]}
                        />
                    </FileSystemHolder>
                </div>
                {props?.verbose && (
                    <SubSectionHeader>
                        <h2>
                            ...while also spending time on{' '}
                            <span>research</span>
                            ...
                        </h2>
                    </SubSectionHeader>
                )}
                <div className="generic-container mx-auto d-flex flex-md-row flex-column gap-2">
                    <FileSystemHolder>
                        <FileSystemBlock
                            verbose={props?.verbose}
                            withBackground
                            header={'MITACS Globalink Research Intern'}
                            location={json?.research?.mitacs?.location}
                            position={json?.research?.mitacs?.positionForMinimal}
                            otherPositions={json?.research?.mitacs?.otherPositions}
                            fromTo={json?.research?.mitacs?.fromTo}
                            filesArray={[
                                {
                                    fileName: 'Researcher, Lakehead University',
                                    fileId: 'lakehead',
                                    content: json?.research?.mitacs?.lakehead,
                                },
                                {
                                    fileName:
                                        '(Virtual) Paper Presentation, Utah',
                                    fileId: 'ieeesbm',
                                    content: json?.research?.mitacs?.ieee,
                                },
                            ]}
                        />
                    </FileSystemHolder>
                    <FileSystemHolder>
                        <FileSystemBlock
                            verbose={props?.verbose}
                            header={'Research Collaborator at MIT, Manipal'}
                            location={json?.research?.manipal?.location}
                            fromTo={json?.research?.manipal?.fromTo}
                            position={json?.research?.manipal?.positionForMinimal}
                            otherPositions={json?.research?.manipal?.otherPositions}
                            filesArray={[
                                {
                                    fileName:
                                        'Building a Calendar of Events Database by Analyzing Financial Spikes',
                                    fileId: 'calendar',
                                    content: json?.research?.manipal?.first,
                                },
                                {
                                    fileName:
                                        'Real-Time Portfolio Management System Utilizing Machine Learning Techniques',
                                    fileId: 'portfolio',
                                    content: json?.research?.manipal?.second,
                                },
                            ]}
                        />
                    </FileSystemHolder>
                </div>
            </div>
            <ResumeSection>
                <h5>Great! You have scrolled this far.</h5>
                <h6>
                    Find all of this and more in my <span>resume</span>.
                </h6>
                <ResumeButton target="_blank">Download resume</ResumeButton>
            </ResumeSection>
            <MoreSection className="pt-md-5 py-3">
                <h2>There&apos;s more...</h2>
                <MoreCards>
                    <MoreCard onClick={() => (location.href = '/blips')}>
                        <p>
                            Byte sized blips from around the world—from wherever
                            I might be.
                        </p>
                        <MoreCardHeader>
                            <p>blips</p>
                            <MoreCardArrow />
                        </MoreCardHeader>
                    </MoreCard>
                    <MoreCard onClick={() => (location.href = '/writing')}>
                        <p>
                            Pieces of writing from a repository of prose, poems,
                            or stories—written by yours truly.
                        </p>
                        <MoreCardHeader>
                            <p>writing</p>
                            <MoreCardArrow />
                        </MoreCardHeader>
                    </MoreCard>
                    <MoreCard onClick={() => (location.href = '/art')}>
                        <p>
                            The best sketches and paintings that I have done
                            over the past few years.
                        </p>
                        <MoreCardHeader>
                            <p>art</p>
                            <MoreCardArrow />
                        </MoreCardHeader>
                    </MoreCard>
                </MoreCards>
            </MoreSection>
            <OrgsSection>
                <h5>...about organisations</h5>
                <h5>I have worked with</h5>
                <OrgCards>
                    <OrgCard
                        onClick={() =>
                            window.open('https://wikimedia.org', '_blank')
                        }
                    >
                        <p>Wikimedia Foundation</p>
                        <OrgCardArrow />
                    </OrgCard>
                    <OrgCard
                        onClick={() =>
                            window.open('https://iisc.ac.in', '_blank')
                        }
                    >
                        <p>Indian Institute of Science, Bangalore</p>
                        <OrgCardArrow />
                    </OrgCard>
                    <OrgCard
                        onClick={() =>
                            window.open('https://lakeheadu.ca', '_blank')
                        }
                    >
                        <p>Lakehead University, Thunder Bay</p>
                        <OrgCardArrow />
                    </OrgCard>
                    <OrgCard
                        onClick={() =>
                            window.open(
                                'https://www.manipal.edu/mit/mit-experience/innovation-center.html',
                                '_blank'
                            )
                        }
                    >
                        <p>Innovation Center, MAHE</p>
                        <OrgCardArrow />
                    </OrgCard>
                    <OrgCard
                        onClick={() =>
                            window.open('https://themitpost.com', '_blank')
                        }
                    >
                        <p>The MIT Post</p>
                        <OrgCardArrow />
                    </OrgCard>
                    <OrgCard
                        onClick={() =>
                            window.open('https://wearemist.in', '_blank')
                        }
                    >
                        <p>Manipal Information Security Team</p>
                        <OrgCardArrow />
                    </OrgCard>
                    <OrgCard
                        onClick={() =>
                            window.open('https://ecellmit.com', '_blank')
                        }
                    >
                        <p>Entrepreneurship Cell, Manipal</p>
                        <OrgCardArrow />
                    </OrgCard>
                </OrgCards>
            </OrgsSection>
        </div>
    )
}
