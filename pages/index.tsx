import {
    LandingWrapper,
    LandingPhoto,
    LandingName,
    LandingDescription,
    LandingIconTray,
    LandingTheProton,
} from '../styles/landingstyles'
import {
    SiDribbble,
    SiGithub,
    SiGmail,
    SiGooglescholar,
    SiInstagram,
    SiLinkedin,
} from '@icons-pack/react-simple-icons'

export default function Index(props: any) {
    return (
        <LandingWrapper>
            <div className="w-md-75 w-100 mx-auto row p-5">
                <div className="col-md-5 text-md-end text-center">
                    <LandingPhoto />
                </div>
                <div className="col-md-7 text-center text-md-start">
                    <h6 className="display-6 text-muted fw-bold m-md-0 mt-2">
                        <LandingTheProton>
                            @<span className="font-monospace">theproton</span>
                        </LandingTheProton>
                    </h6>
                    <LandingName className="lh-1 fw-bolder">
                        Parthiv Menon
                    </LandingName>
                    <LandingDescription className="lh-sm text-muted">
                        Passionate fullstack developer and open-source
                        enthusiast who loves brainstorming ideas, Holmes, and
                        playing sports. Also, an avid reader, artist, and writer
                        of poetry, prose and stories.
                    </LandingDescription>
                    <LandingIconTray>
                        <a href="https://github.com/parthiv-m" target="_blank">
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
    )
}
