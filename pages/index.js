import DashboardSidebar from "../components/dashboardSidebar";
import Community from "../components/communities";
import Events from "../components/events";

export default function Home() {
  return (
    <div>
      <div className={`row g-0`}>
        <div className={`col-md-3`}>
          <DashboardSidebar />
        </div>
        <div className={`col-md-9`}>
          <Events />
          {/* <Community /> */}
        </div>
      </div>
    </div>
  );
}
