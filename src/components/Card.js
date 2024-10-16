import React from 'react'

export default function Card(props){
    console.log(props.item);
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card-container">
            <div className="card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={`/images/${props.item.coverImg}`} alt="" className="person-img"/>
                <div className="ratings">
                    <img src="/images/star.png" alt="" width="10%"/>
                    <p>{props.item.stats.rating}</p>
                    <p>({props.item.stats.reviewCount})</p>
                    <p>{props.item.location}</p>
                </div>
                <div className="title">
                    <p>{props.item.title}</p>
                    <p><b>From ${props.item.price}</b>/person</p>
                </div>
            </div>
        </div>
    )
}
