import { useState } from "react"

function Accordion({data}){

    return (
        <div className="accordion">
            {data.map((item, i) => <AccordionItem item={item} num={i}/>)}
        </div>
    )
}

function AccordionItem({item, num}){

    const [hideItem, setHideItem] = useState(true)

    function handleHideItem(){
        setHideItem(!hideItem)
    }
    return (
        <div>
            <div className="item-header" style={hideItem === false ? {"borderTop": "4px solid green" } : {}}>
                <h2 style={hideItem === false ? {"color": "green" } : {}}><span >{num < 9 ? `0${Number(num+1)}` : num + 1} </span> {item.title}</h2>
                <p onClick={handleHideItem}>{hideItem ? "+" : "-"}</p>
            </div>
            <div className="item-container" style={hideItem ? {"display": "none"} : {}}>
                <p className="content">{item.content}</p>
            </div>
        </div>
    )
}

export default Accordion