import { OverlayHeader, OverlaySubTitle, OverlayTitle, OverlayWrapper } from './style';

const Overlay =({align, size, title, subTitle, heading})=>{
    return(
        <OverlayWrapper align={align || null}>
            <OverlayHeader size={size}>{heading ? heading : null}</OverlayHeader>
            <OverlayTitle>{title ? title : null}</OverlayTitle>
            <OverlaySubTitle>{subTitle ? subTitle : null}</OverlaySubTitle>
        </OverlayWrapper>
    )
}

export default Overlay