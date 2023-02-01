import { Fragment, useState } from "react"

const Text = ({variant, open, grow, children})=>{
    return (
        <Fragment>
            <p onClick={grow} className={variant}> {children} </p>
            <style jsx> {`
            .helping{
                height: 57px;
                color: #fff;
                font-size: 45px;
                font-weight: 600;
                margin-bottom: 4px;
            }
            .live{
                height: 101px; 
                color: #fff;
                font-size: 80px;
                font-weight: 600;
                margin-bottom: 16px;
                line-height: 101px;
            }
            .offers{
                height: 24px;
                color: #fff;
                font-size: 20px;
                font-weight: 600;
            }
            .places-heading{
                height: 36px;
                width: 1059px;
                font-size: 32px;
                font-weight: 600;
            }
            .places-sub-heading{
                height: 20px;
                width: 1059px;
                margin-top: 16px;             
            }
            .country-city{
                font-size: 16px;
                font-weight: 600;
                line-height: 19.5px;
                margin-bottom: 8px;
            }
            .country-bookings{
                font-size: 14px;
                font-weight: 500;
                line-height: 17px;
            }
            .booking-title{
                font-size: 42px;
                font-weight: 700;
                line-height: 50.52px;
                margin-booking: 8px;
            }
            .booking-sub-title{
                height: 40px;
                width: 389px;
                font-size: 16px;
                font-weight: 400;
                line-height: 19.5px;
                margin-bottom: 16px;
            }
            .reviews-heading{
                height: 36px;
                width: 1128px;
                font-size: 32px;
                font-weight: 600;
                line-height: 39.01px;
                margin-bottom: 16px;
            }
            .reviews-sub-heading{
                height: 20px;
                width: 851px;
                font-size: 16px;
                font-weight: 400;
            }
            .review-heading{
                height: 80px;
                width: 377px;
                font-size: 24px;
                font-weight: 700;
            }
            .review-sub-heading{
                height: ${open ? 75 : 37}px;
                width: 377px;
                font-size: 14px;
                font-weight: 500;
                line-height: 17px;
                letter-spacing: 0em;
                text-align: left;
                overflow: hidden;
            }
            .viewmore{
                color: black;
                font-weight: 600;
                font-size: 14px;
                cursor: pointer;
                text-align: left;
                height: 18px;
                width: 377px;
                display: flex;
                align-items: center;
                margin-top: 12px;
                justify-content: flex-end;
            }
            .name{
                height: 18px;
                width: 377px;
                font-weight: 600;
                font-size: 14px;
            }
            .location{
                height: 15px;
                width: 377px;
                font-size: 12px;
            }
            .google-text{
                margin-left: 8px;
            }
            .newsletter-heading{
                height: 108px;
                width: 364px;
                font-size: 44px;
                font-weight: 600;
                margin-bottom: 24px;
            }
            .newsletter-sub-heading{
                height: 25px;
                width: 117px;
                font-weight: 600;
                font-size: 16px;
                margin-bottom: 8px;
            }
            .newsletter-text{
                height: 20px;
                width: 592px;
            }
            `} </style>
        </Fragment>
    )
}

export default Text