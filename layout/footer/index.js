import { FooterWrapper, FooterItems, FooterItem, FooterLogo, FooterIcons, FooterIcon, FooterItemHeader, FooterLinks, FooterLink } from "./style";
import { footerItems } from "../../components/data/navigations/navigations";
import Link from 'next/link'
import Newsletter from "./newsletter";
import { icons } from '../../components/data/icons'

const Footer =()=>{
    return(
        <FooterWrapper>
            <Newsletter/>
            <FooterItems>
                <FooterItem height='100px'>
                    <FooterLogo src="images/Logo.png" />
                    <FooterIcons>
                        {
                            icons.map((item, index)=>(
                                <FooterIcon key={item.text} src={item.icon} />
                            ))
                        }
                    </FooterIcons>
                </FooterItem>
                {
                    footerItems.map((item, index)=>(
                        <FooterItem key={item.heading}>
                            <FooterItemHeader>{item.heading}</FooterItemHeader>
                            <FooterLinks>
                            {
                                item.links.map((link, index)=>(
                                    <FooterLink key={link.name}>
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