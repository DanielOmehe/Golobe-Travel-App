import { FooterWrapper, FooterItems } from "./style";
import Newsletter from "./newsletter";
import { FooterWrapper, FooterItems, FooterItem, FooterLogo, FooterIcons, FooterIcon, FooterItemHeader, FooterLinks, FooterLink } from "./style";
import { footerItems } from "../../components/data/navigations/navigations";
import Link from 'next/link'

const Footer =()=>{
    return(
        <FooterWrapper>
            <Newsletter/>
            <FooterItems></FooterItems>
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