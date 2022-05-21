import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import DashboardSidebar from "../components/dashboardSidebar";
import Community from "../components/communities";
import Events from "../components/events";
import Veterans from "../components/veterans";
import Message from "../components/messages";
import Navbar from "../components/navbar";

export default function Home() {
  const router = useRouter();
  const [option, setOption] = useState("veterans");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }, []);
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
