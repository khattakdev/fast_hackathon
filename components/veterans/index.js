import { useState, useEffect } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-nextjs-toast";
import axios from "../../axiosInstance";

function Veterans() {
  const [veterans, setVeterans] = useState([]);
  const getAllVeterans = async () => {
    const res = await axios.get("/user/veterans");
    const fetchedVeterans = res.data.veterans;
    setVeterans(fetchedVeterans);
  };

  useEffect(() => {
    getAllVeterans();
  }, []);

  return (
    <div>
      <h2 className={`p-4`}>All Veterans</h2>
      <div className="row p-4">
        {veterans.map((veteran, index) => (
          <div key={index} className="col-md-3">
            <div className="card bg-light">
              <div className="card-img text-center mt-3">
                <Image
                  className={`img-fluid rounded-circle border border-primary p-2`}
                  src="/profile.jpeg"
                  width="100"
                  height="100"
                />
              </div>
              <div className="card-body">
                <div className="text-center">
                  <h4>{veteran.name}</h4>
                  <span>{veteran.email}</span>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h5 className="mt-3">Followers</h5>
                    <h5 className="mt-3">
                      <span className="badge bg-success">
                        {veteran.followers.length}
                      </span>
                    </h5>
                  </div>

                  <div className="d-flex justify-content-between">
                    <h5 className="mt-3">Followings</h5>
                    <h5 className="mt-3">
                      <span className="badge bg-success">
                        {veteran.followings.length}
                      </span>
                    </h5>
                  </div>

                  <div className="d-flex justify-content-between">
                    <h5 className="mt-3">Points</h5>
                    <h5 className="mt-3">
                      <span className="badge bg-secondary">
                        ⭐{veteran.points}
                      </span>
                    </h5>
                  </div>

                  <hr />

                  <button className="btn btn-primary btn-block">Follow</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Veterans;
