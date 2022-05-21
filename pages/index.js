import { useState } from "react";
import DashboardSidebar from "../components/dashboardSidebar";
import Community from "../components/communities";
import Events from "../components/events";
import Veterans from "../components/veterans";
import Message from "../components/messages";
import Navbar from "../components/navbar";

export default function Home() {
  const [option, setOption] = useState("veterans");
  return (
    <div>
      <Navbar setOption={setOption} />
      <div className={`row g-0`}>
        <div className={`col-md-3`}>
          <DashboardSidebar />
        </div>
        <div className={`col-md-9`}>
          {option == "veterans" && <Veterans />}
          {option == "events" && <Events />}
          {option == "community" && <Community />}
          {option == "messages" && <Message />}
        </div>
      </div>
    </div>
  );
}
