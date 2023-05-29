import { FooterWrapper, FooterItems } from "./style";

const Footer =()=>{
    return(
        <FooterWrapper>
            <FooterItems>
                <FooterItem height='100px'>
                    <FooterLogo src="images/Logo.png" />
                    <FooterIcons>
                        <FooterIcon src="images/facebook.svg" />
                        <FooterIcon src="images/instagram.svg" />
                        <FooterIcon src="images/twitter.svg" />
                        <FooterIcon src="images/youtube.svg" />
                    </FooterIcons>
                </FooterItem>
                {
                    footerItems.map((item, index)=>(
                        <FooterItem>
                            <FooterItemHeader>{item.heading}</FooterItemHeader>
                            <FooterLinks>
                            {
                                item.links.map((link, index)=>(
                                    <FooterLink>
                                        <Link href={link.target}>{link.name}</Link>
                                    </FooterLink>
                                ))
                            }
                            </FooterLinks>
                        </FooterItem>
                    ))
                }
            </FooterItems>
        </FooterWrapper>
    )
}

export default Footer