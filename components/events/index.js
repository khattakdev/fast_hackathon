import Image from "next/image"
 
function Events() {
    const events = [
        {
            eventName: "How we can succeed in life",
            description: "lorem ipsum dolor sit amet visum sit amet dolor sit amet",
            date: "12/05/2002",
            points: 150,
            type: "Motivatinal Talk",
            totalInterest: 300
        },
        {
            eventName: "How we can succeed in life",
            description: "lorem ipsum dolor sit amet visum sit amet dolor sit amet",
            date: "12/05/2002",
            points: 150,
            type: "Motivatinal Talk",
            totalInterest: 300
        },
        {
            eventName: "How we can succeed in life",
            description: "lorem ipsum dolor sit amet visum sit amet dolor sit amet",
            date: "12/05/2002",
            points: 150,
            type: "Motivatinal Talk",
            totalInterest: 300
        }
    ]
    return (
        <div>
        <h2 className={`p-4`}>All Events</h2>
        <div className="row p-4">
        {
            events.map(event => (
            <div className="col-lg-4">
                <div className="card bg-light mb-3">
                <div className="card-body">
                    <h4 className="card-title">{event.eventName}</h4>
                    
                    <h6>
                        <span className="badge bg-success">
                           {event.type}
                        </span>
                    </h6>
                    <h6> 
                        <span className="badge bg-secondary">
                         ⭐ {event.points}
                        </span>
                    </h6>

                    <h6>people Interested: {event.totalInterest}</h6>

                    <h6>Date: {event.date}</h6>
                </div>
                </div>
            </div>
            ))
        }
        </div>
        
        </div>
        

    )
}

export default Events;