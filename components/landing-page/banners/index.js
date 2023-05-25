import { BannerWrapper, Banner } from './style';
import { booking } from '../../data/booking'

const Banners =()=>{
    return(
        <BannerWrapper>
            {
                booking.map((card, index)=>(
                    <Banner url={card.image}></Banner>
                ))
            }
        </BannerWrapper>
    )
}

export default Banners