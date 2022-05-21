
function Community() {

    const communities = [
        {
            name: "Malwoks org",
            type: "Educational Insitute",
            events: 35,
            followers: 5000
        },
        {
            name: "Weshaps binands",
            type: "NGO",
            events: 10,
            followers: 2000
        },
        {
            name: "Vols Binds",
            type: "organizations",
            events: 50,
            followers: 6000
        }
    ]

    return (
        <div>
            <h2 className={`p-4`}>All Communities</h2>
        <div className="row p-4">
        {
            communities.map(commnity => (
            <div className="col-lg-4">
                <div className="card bg-light mb-3">
                <div className="card-body">
                    <h4 className="card-title">{commnity.name}</h4>
                    
                    <h6>
                        <span className="badge bg-success">
                           {commnity.type}
                        </span>
                    </h6>

                    <h6>Followers: {commnity.followers}</h6>
                    <h6>Events: {commnity.events}</h6>
                </div>
                </div>
            </div>
            ))
        }
        </div>
        </div>
        
    )
}

export default Community