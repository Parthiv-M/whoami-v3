import { FooterBottom, FooterBranding, FooterLink, FooterLinks, FooterLinkColumn, FooterColumnHead} from "../styles/footer";

export default function Footer() {
    return (
        <FooterBottom>
            <FooterBranding>parthiv menon.</FooterBranding>
            <p>This website has been fully designed and developed by Parthiv Menon. All images, if any, are created and owned by me.</p>
            <FooterLinks>
                <FooterLinkColumn>
                    <FooterColumnHead>find me on</FooterColumnHead>
                    <FooterLink href="/blips">github</FooterLink>
                    <FooterLink href="/blips">linkedin</FooterLink>
                    <FooterLink href="/blips">instagram</FooterLink>
                    <FooterLink href="/blips">mastodon</FooterLink>
                </FooterLinkColumn>
                <FooterLinkColumn>
                    <FooterColumnHead>explore my</FooterColumnHead>
                    <FooterLink href="/blips">projects</FooterLink>
                    <FooterLink href="/blips">research</FooterLink>
                    <FooterLink href="/blips">work experience</FooterLink>
                    <FooterLink href="/blips">open source experience</FooterLink>
                </FooterLinkColumn>
                <FooterLinkColumn>
                    <FooterColumnHead>say hello</FooterColumnHead>
                    <FooterLink href="/blips">gmail</FooterLink>
                    <FooterLink href="/blips">protonmail</FooterLink>
                </FooterLinkColumn>
                <FooterLinkColumn>
                    <FooterColumnHead>go through my</FooterColumnHead>
                    <FooterLink href="/blips">stories</FooterLink>
                    <FooterLink href="/blips">poems</FooterLink>
                    <FooterLink href="/blips">other writing</FooterLink>
                    <FooterLink href="/blips">artwork</FooterLink>
                </FooterLinkColumn>
            </FooterLinks>
        </FooterBottom>
    )
}