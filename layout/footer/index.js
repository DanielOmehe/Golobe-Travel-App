import { FooterWrapper, FooterItems, FooterItem, FooterLogo, FooterIcons, FooterIcon, FooterItemHeader, FooterLinks, FooterLink } from "./style";
import { footerItems } from "../../components/data/navigations/navigations";
import Link from 'next/link'
import Newsletter from "./newsletter";

const Footer =()=>{
    return(
        <FooterWrapper>
            <Newsletter/>
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
                        <FooterItem key={index}>
                            <FooterItemHeader>{item.heading}</FooterItemHeader>
                            <FooterLinks>
                            {
                                item.links.map((link, index)=>(
                                    <FooterLink key={index}>
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