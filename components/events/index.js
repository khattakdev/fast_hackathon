import classes from "./index.module.css"
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
        <div className="container-fluid">
        <h2 className={`p-4`}>All Events</h2>
        
        <form>
            <div className="row">
                <div className="col-lg-4">
                    <div className="form-group p-4">
                        <input className="form-control" type="text" placeholder="search by event name" />                        
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="form-group p-4">
                        <input className="form-control" type="text" placeholder="search by city" />                        
                    </div>
                </div>

                <div className="col-md-4 p-4">
                     <button className="btn btn-block btn-primary">search</button>
                </div>
            </div>
            <div class="form-check ml-5">
                <input className="form-check-input" type="checkbox" name="option1" value="something" style={{marginLeft: "4px"}}/>
                <label style={{marginLeft: "3px"}} class="form-check-label">use current location</label>
              </div>
        </form>

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