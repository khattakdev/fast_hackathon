import classes from "./index.module.css"
import Image from "next/image"

function DashboardSidebar() {

    return (
        <div className={`d-flex flex-column flex-shrink-0 p-3 text-white ${classes.bgSidebar}`} style={{width: "280px", height: "100vh"}}>
             <h4 className={`d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none`}>
                <svg className={`bi me-2`} width="40" height="32"></svg>
                <span className={`text-white text-decoration-none`}>Dashboard</span>
            </h4>
            <hr />
            <ul className={`nav nav-pills flex-column mb-auto`}>
            <li className={`nav-item`}>
               <div className={`text-center`}>
                   <Image className={`rounded-circle img-fluid border border-white p-2`} src={"/vetran-user.jpg"} height="100" width="100"/>
                   <h5>Steven Covey</h5>
                   <span>stevencovey@gmail.com</span>
               </div>
            </li>
            <li className={`nav-item mt-5`}>
               <div className={`d-flex justify-content-around`}>
                   <h5>Following:</h5>
                   <h5>
                       <span className={`badge bg-light text-dark`}>55</span>
                   </h5>
               </div>
            </li>
            <hr />
            <li className={`nav-item mt-3`}>
               <div className={`d-flex justify-content-around`}>
                   <h5>Followers:</h5>
                   <h5>
                       <span className={`badge bg-light text-dark`}>200</span>
                   </h5>
               </div>
            </li>

            <hr />

            <li className={`nav-item mt-3`}>
               <div className={`d-flex justify-content-around`}>
                   <h5>Event Points:</h5>
                   <h5>
                       <span className={`badge bg-light text-dark`}>⭐200</span>
                   </h5>
               </div>
            </li>
            
            </ul>
        </div>
    )
}

export default DashboardSidebar;