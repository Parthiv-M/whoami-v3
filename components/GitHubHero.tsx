import {
    ContentTainer,
    GitHubHeader,
    GitHubSubDiv,
    GitHubSubText,
    GridForText,
    HeroSection,
} from '../styles/githubhero'

export default function GitHubHero() {
    return (
        <HeroSection>
            <ContentTainer>
                <GridForText>
                    <div className="d-flex align-self-md-center justify-content-center">
                        <GitHubSubDiv>
                            <GitHubHeader>
                                <a
                                    href="https://github.com/parthiv-m"
                                    target="_blank"
                                >
                                    GitHub
                                    <span>&#10509;</span>
                                </a>
                            </GitHubHeader>
                            <GitHubSubText>is where I keep</GitHubSubText>
                            <GitHubSubText>
                                track of my tech projects
                            </GitHubSubText>
                        </GitHubSubDiv>
                    </div>
                </GridForText>
            </ContentTainer>
        </HeroSection>
    )
}
