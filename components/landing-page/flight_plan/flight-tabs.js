import { Children, useState } from "react";
import Text from "../../former-data/utility/text";
import { tabs } from "../../data/tabs";

const FlightTab = ({variant, children})=>{
    const [activeTab, setactiveTab] = useState(tabs[0].key)
    return (
        <>
            <div className={variant}>
                <ul className="listItems">
                    {
                        tabs.map(({tab, image ,key})=>{
                            return(
                                <li key={key} className={activeTab === key ? "active" : ''} onClick={()=>setactiveTab(key)}>
                                    <img src={image} alt='icon' />
                                    <Text variant='tab'>{tab}</Text>
                                </li>
                            )        
                        })
                    }
                </ul>
                <div className="flight-content">
                    {
                        Children.map(children, (child) =>(
                            child.props.title === activeTab ? child : null
                        ))
                    }
                </div>
            </div>
            <style jsx>{`
                    .listItems{
                        height: 48px;
                        width: 210px;                        
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 45px;
                    }
                    li{
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        list-style-type: none;
                        height: 100%;
                        cursor: pointer;
                    }
                    li:first-child{ 
                        padding-right: 20px;
                    }
                    li:last-child{
                        padding-left: 20px;
                        border-left: 1px solid grey;
                    }
                    .active{
                        border-bottom: 3px solid #8DD3BB;
                    }
            `}</style>
        </>
    )
}

export default FlightTab