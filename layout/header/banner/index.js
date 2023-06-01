import { BannerWrapper } from "./style";

const Banner = ({ height, top, image, children, position }) => {
  return (
    <BannerWrapper height={height} top={top} url={image} position={position || null} >
    {children}
    </BannerWrapper>
  );
};

export default Banner;
