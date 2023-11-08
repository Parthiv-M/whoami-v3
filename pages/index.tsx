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
import AcrossPage from '../components/AcrossPage'
import IconWithTooltip from '../components/IconWithTooltip'
import GitHubHero from '../components/GitHubHero'
import FileSystemBlock from '../components/FileSystem'
import { FileSystemHolder } from '../styles/filesystem'
import { ResumeButton, ResumeSection } from '../styles/resume'

export default function Index(props: any) {
    return (
        <div>
            <AcrossPage />
            <LandingWrapper>
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
                        <p className="text-muted">
                            In publishing and graphic design, Lorem ipsum
                            (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly
                            used to demonstrate the visual form of a document or
                            a typeface without relying on meaningful content.
                            Lorem ipsum may be used as a placeholder before
                            final copy is available. It is also used to
                            temporarily replace text in a process called
                            greeking, which allows designers to consider the
                            form of a webpage or publication, without the
                            meaning of the text influencing the design.
                        </p>
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
                        <p className="text-muted">
                            In publishing and graphic design, Lorem ipsum
                            (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly
                            used to demonstrate the visual form of a document or
                            a typeface without relying on meaningful content.
                            Lorem ipsum may be used as a placeholder before
                            final copy is available. It is also used to
                            temporarily replace text in a process called
                            greeking, which allows designers to consider the
                            form of a webpage or publication, without the
                            meaning of the text influencing the design.
                        </p>
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
                        <p className="text-muted">
                            In publishing and graphic design, Lorem ipsum
                            (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly
                            used to demonstrate the visual form of a document or
                            a typeface without relying on meaningful content.
                            Lorem ipsum may be used as a placeholder before
                            final copy is available. It is also used to
                            temporarily replace text in a process called
                            greeking, which allows designers to consider the
                            form of a webpage or publication, without the
                            meaning of the text influencing the design.
                        </p>
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
                        <p className="text-muted">
                            In publishing and graphic design, Lorem ipsum
                            (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly
                            used to demonstrate the visual form of a document or
                            a typeface without relying on meaningful content.
                            Lorem ipsum may be used as a placeholder before
                            final copy is available. It is also used to
                            temporarily replace text in a process called
                            greeking, which allows designers to consider the
                            form of a webpage or publication, without the
                            meaning of the text influencing the design.
                        </p>
                    </SkillCascadeCard>
                </div>
            </SkillsWrapper>
            <GitHubHero />
            <SubSectionHeader>
                <h2>
                    I was very <span>active</span> in <span>college</span>{' '}
                    clubs...
                </h2>
            </SubSectionHeader>
            <div className="generic-container px-md-0 px-3 mx-auto d-flex flex-md-row flex-column gap-2">
                <FileSystemHolder>
                    <FileSystemBlock
                        withBackground
                        header={'Manipal Information Security Team'}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'two',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'three',
                                content:
                                    ' used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                    <FileSystemBlock
                        header={"Linux Users' Group"}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'two',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                </FileSystemHolder>
                <FileSystemHolder>
                    <FileSystemBlock
                        withBackground
                        header={'The MIT Post'}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'two',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'three',
                                content:
                                    ' used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'three',
                                content:
                                    ' used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                    <FileSystemBlock
                        withBackground
                        header={'Entrepreneurship Cell, Manipal'}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'two',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                </FileSystemHolder>
            </div>
            <SubSectionHeader>
                <h2>
                    ...and got to <span>work</span> at some <span>amazing</span>{' '}
                    places...
                </h2>
            </SubSectionHeader>
            <div className="generic-container px-md-0 px-3 mx-auto d-flex flex-md-row flex-column gap-2">
                <FileSystemHolder>
                    <FileSystemBlock
                        header={'Wikimedia Foundation'}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'two',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'three',
                                content:
                                    ' used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'four',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                    <FileSystemBlock
                        withBackground
                        header={'Innovation Center, Manipal'}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'two',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                </FileSystemHolder>
                <FileSystemHolder>
                    <FileSystemBlock
                        withBackground
                        header={'IISc Bangalore'}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'two',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'three',
                                content:
                                    ' used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                    <FileSystemBlock
                        header={'Dotfood'}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                </FileSystemHolder>
            </div>
            <SubSectionHeader>
                <h2>
                    ...while also spending time on <span>quality research</span>
                    ...
                </h2>
            </SubSectionHeader>
            <div className="generic-container px-md-0 px-3 mx-auto d-flex flex-md-row flex-column gap-2">
                <FileSystemHolder>
                    <FileSystemBlock
                        withBackground
                        header={'MITACS Globalink Research Intern'}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'two',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'three',
                                content:
                                    ' used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                </FileSystemHolder>
                <FileSystemHolder>
                    <FileSystemBlock
                        header={'Research Collaborator at MIT, Manipal'}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'two',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                </FileSystemHolder>
            </div>
            <SubSectionHeader>
                <h2>
                    ...and <span>dabbling</span> in open source!
                </h2>
            </SubSectionHeader>
            <div className="generic-container px-md-0 px-3 mx-auto d-flex flex-md-row flex-column gap-2">
                <FileSystemHolder>
                    <FileSystemBlock
                        header={'Mentor, Outreachy, December Cohort'}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                            {
                                fileName: 'two',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                </FileSystemHolder>
                <FileSystemHolder>
                    <FileSystemBlock
                        withBackground
                        header={'Kubernetes Community Days, Bengaluru 2023'}
                        filesArray={[
                            {
                                fileName: 'one',
                                content:
                                    'Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called',
                            },
                        ]}
                    />
                </FileSystemHolder>
            </div>
            <ResumeSection>
                <div className="generic-container mx-auto">
                    <h5>Great! You have scrolled this far.</h5>
                    <h6>
                        Find all of this and more in my <span>resume</span>.
                    </h6>
                    <ResumeButton>Download resume</ResumeButton>
                </div>
            </ResumeSection>
        </div>
    )
}
