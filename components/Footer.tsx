import {
    FooterBottom,
    FooterBranding,
    FooterLink,
    FooterLinks,
    FooterLinkColumn,
    FooterColumnHead,
} from '../styles/footer'

export default function Footer() {
    return (
        <FooterBottom>
            <FooterBranding>parthiv menon.</FooterBranding>
            <p>
                This website has been fully designed and developed by Parthiv
                Menon. All images, if any, are created and owned by me.
            </p>
            <FooterLinks>
                <FooterLinkColumn>
                    <FooterColumnHead>find me on</FooterColumnHead>
                    <FooterLink
                        href="https://github.com/parthiv-m"
                        target="_blank"
                    >
                        github
                    </FooterLink>
                    <FooterLink
                        href="https://linkedin.com/in/parthivmenon"
                        target="_blank"
                    >
                        linkedin
                    </FooterLink>
                    <FooterLink
                        href="https://instagram.com/_.parthiv_"
                        target="_blank"
                    >
                        instagram
                    </FooterLink>
                    <FooterLink
                        href="https://mastodon.social/@theproton"
                        target="_blank"
                    >
                        mastodon
                    </FooterLink>
                </FooterLinkColumn>
                <FooterLinkColumn>
                    <FooterColumnHead>explore my</FooterColumnHead>
                    <FooterLink href="#tech">tech projects</FooterLink>
                    <FooterLink href="#research">research</FooterLink>
                    <FooterLink href="#work">work experience</FooterLink>
                    <FooterLink href="#opensource">
                        open source experience
                    </FooterLink>
                </FooterLinkColumn>
                <FooterLinkColumn>
                    <FooterColumnHead>say hello</FooterColumnHead>
                    <FooterLink href="mailto:parthivmenon.dev@gmail.com">
                        gmail
                    </FooterLink>
                    <FooterLink href="mailto:parthivmenon@proton.me">
                        protonmail
                    </FooterLink>
                </FooterLinkColumn>
                <FooterLinkColumn>
                    <FooterColumnHead>go through my</FooterColumnHead>
                    <FooterLink href="/writing?type=stories">
                        stories
                    </FooterLink>
                    <FooterLink href="/writing?type=poems">poems</FooterLink>
                    <FooterLink href="/writing?type=other">
                        other writing
                    </FooterLink>
                    <FooterLink href="/art">artwork</FooterLink>
                    <FooterLink href="/blips">blips</FooterLink>
                </FooterLinkColumn>
            </FooterLinks>
        </FooterBottom>
    )
}
