import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-nextjs-toast";
import axios from "../../axiosInstance";

function Community() {
  const [communities, setCommunities] = useState([]);
  const getAllCommunities = async () => {
    const res = await axios.get("/community");
    const community = res.data.organizations;
    console.log(community);
    setCommunities(community);
  };

  useEffect(() => {
    getAllCommunities();
  }, []);

  const followEvent = async (id, index) => {
    const res = await axios.patch(`/community/follow/${id}`);
    console.log(res);

    try {
      const res = await axios.patch(`/community/follow/${id}`);
      toast.notify(res.data.msg[0]);
      const updatedCommunities = [...communities];
      console.log(communities[index].followers);
      communities[index].followers.push("");
      setCommunities(updatedCommunities);
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data.error[0]) {
        toast.notify(error.response.data.error[0]);
      } else {
        toast.notify("Something went wrong!");
      }
    }
  };

  return (
    <div>
      <h2 className={`p-4`}>All Communities</h2>
      <ToastContainer />
      <div className="row p-4">
        {communities.map((community, index) => (
          <div key={index} className="col-lg-4">
            <div className="card bg-light mb-3">
              <div className="card-body">
                <h4 className="card-title">{community.name}</h4>

                <h6>
                  <span className="badge bg-success">{community.type}</span>
                </h6>

                <h6>Followers: {community.followers.length}</h6>
                <h6>Events: {community.events.length}</h6>
                <button onClick={() => followEvent(community._id, index)}>
                  Follow{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;
