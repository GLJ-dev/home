import React from 'react'
import { ListOfEvents } from '../helper/ListOfEvents'
import TimelineItem from '../components/TimelineItem'
import '../styles/Timeline.css'

function Timeline() {
    return (
        <div className="timelineDiv">
            <h1 className="timelineTitle">Lista Wydarzen</h1>
            <div className="timelineContainer">
                {ListOfEvents.map((event, key) => {
                    return (
                        <TimelineItem 
                            key={key}                            
                            date={event.date}
                            name={event.name} 
                            image={event.image} 
                            description={event.description} 
                            />
                 );
              })}
            </div>
        </div>
    )
}

export default Timeline
