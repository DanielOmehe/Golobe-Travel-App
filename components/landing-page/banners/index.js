import { BannerWrapper, Banner, BannerTitle, BannerSubTitle, BannerButton, BannerIcon } from './style';
import { booking } from '../../data/booking'

const Banners =()=>{
    return(
        <BannerWrapper>
            {
                booking.map((card, index)=>(
                    <Banner key={card.title} url={card.image}>
                        <BannerTitle>{card.title}</BannerTitle>
                        <BannerSubTitle>{card.subtitle}</BannerSubTitle>
                        <BannerButton>
                            <BannerIcon src={card.icon} />
                            <a href={card.url}>{card.text}</a>
                        </BannerButton>
                    </Banner>
                ))
            }
        </BannerWrapper>
    )
}

export default Banners