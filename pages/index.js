import DashboardSidebar from '../components/dashboardSidebar'
import Events from '../components/events'

export default function Home() {
  return (
    <div>
      <div className={`row g-0`}>
        <div className={`col-md-2`}>
          <DashboardSidebar/>
        </div>
        <div className={`col-md-10`}>
          <Events/>
        </div>
      </div>
    </div>
  )
}
