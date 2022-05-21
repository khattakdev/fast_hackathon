import Image from "next/image"
 
function Veterans() {
    const veterans = [
        {
            name: "wood jacks",
            email: "wood@gmail.com",
            photo: "/other-veteran.jpg",
            followers: 300,
            followings: 40,
            points: 200
        },
        {
            name: "sam bills",
            email: "sam@gmail.com",
            photo: "/team-1.jpg",
            followers: 500,
            followings: 34,
            points: 900
        },
        {
            name: "Rico suave",
            email: "rico@gmail.com",
            photo: "/team-2.jpg",
            followers: 580,
            followings: 12,
            points: 100
        },
        {
            name: "Kevin Ben",
            email: "kevin@gmail.com",
            photo: "/team-3.jpg",
            followers: 580,
            followings: 12,
            points: 100
        }
    ]
    return (
        <div>
        <h2 className={`p-4`}>All Veterans</h2>
        <div className="row p-4">
            {
                veterans.map(veteran => (
                    <div className="col-md-3">
                        <div className="card bg-light">
                            <div className="card-img text-center mt-3">
                                <Image className={`img-fluid rounded-circle border border-primary p-2`} src={veteran.photo} width="100" height="100"/>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <h4>{veteran.name}</h4>
                                    <span>{veteran.email}</span>
                                    <hr /> 
                                    <div className="d-flex justify-content-between">
                                    <h5 className="mt-3">Followers</h5>
                                    <h5 className="mt-3">
                                        <span className="badge bg-success">{veteran.followers}</span>
                                    </h5>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                    <h5 className="mt-3">Followings</h5>
                                    <h5 className="mt-3">
                                        <span className="badge bg-success">{veteran.followings}</span>
                                    </h5>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                    <h5 className="mt-3">Points</h5>
                                    <h5 className="mt-3">
                                        <span className="badge bg-secondary">⭐{veteran.points}</span>
                                    </h5>
                                    </div>

                                    <hr />

                                    <button className="btn btn-primary btn-block">Follow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
        </div>
        

    )
}

export default Veterans;