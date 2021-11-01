import React from 'react'

function TimelineItem({name, image, description, date}) {
    return (
        <div className="timelineItem">
            <div className="timelineItemContent">
                <time className='eventDate'>{date}</time>
                <h1 className="eventName">{name}</h1>
                <div className="eventBackground" style={{backgroundImage: `url(${image})`}}>
                </div>
                <p className="eventDescription">{description}</p>
                <span className="circle"></span>
            </div>
        </div>
    )
}

export default TimelineItem
 