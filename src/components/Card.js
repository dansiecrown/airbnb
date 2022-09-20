import React from 'react'

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }



    return (
        <div className='card'>
            {badgeText && <div className="card--badge"> {badgeText} </div>}
            <img src={`imgs/${props.coverImg}`} className='card--image' alt="" />
            <div className='card--stats'>
                <img src="imgs/Star1.png" alt="" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray" >({props.stats.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}
