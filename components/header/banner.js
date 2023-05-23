import Text from '../utility/text';

const Banner = ({})=>{
    return(
        <>
            <div className="banner">
                <Text variant='helping'>Helping Others</Text>
                <Text variant='live'>Live & Travel</Text>
                <Text variant='offers'>Special Offer to suit your plan</Text>
            </div>
            <style jsx>{`
                .banner{
                    height: 202px;
                    width: 753px;
                    left: 414px;
                    top: 250px;
                    border-radius: 0px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                }
            `}</style>
        </>
    )
}

export default Banner