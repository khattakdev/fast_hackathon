import classes from "./index.module.css"
import Image from "next/image"
import { useState } from "react"

function DashboardSidebar() {

    const [hobbies, setHobbies] = useState([])
    const [editMode, setEditMode] = useState(false)


    const updateEditMode = () => {
        const updatedMode = !editMode;

        setEditMode(updatedMode)
    }

    return (
        <div className={`d-flex flex-column flex-shrink-0 p-3 text-white ${classes.bgSidebar} ${classes.sidebarHeight}`} style={{width: "280px"}}>
             <h4 className={`d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none`}>
                <svg className={`bi me-2`} width="40" height="32"></svg>
                <span className={`text-white text-center`}>Dashboard</span>
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

            <hr />
            
            <li className={`nav-item mt-3`}>
               <div>
                   {
                       editMode == false ?
                   <div>
                   <div className="d-flex">
                   <h5>hobbies</h5>
                   <button onClick={updateEditMode} type="button" className={`${classes.hobbiesEditBtn}`}  data-toggle="modal" data-target="#hobbiesEditModal">&#9999;</button>
                   </div>
                   <h5>
                       <span className={`badge bg-light text-dark`}>Orphanage visit</span>
                   </h5>
                   <h5>
                       <span className={`badge bg-light text-dark`}>Visit hospital to patients</span>
                   </h5>
                   <h5>
                       <span className={`badge bg-light text-dark`}>Professional Talks</span>
                   </h5>
                   </div>
                   :
                   <div>
                       <button onClick={updateEditMode} className="btn btn-success mb-3">Save</button>
                       <form>
                       <div class="form-check">
                            <input className="form-check-input" type="checkbox" name="option1" value="something" />
                            <label class="form-check-label">Public Talks</label>
                        </div>

                        <div class="form-check">
                            <input className="form-check-input" type="checkbox" name="option1" value="something" />
                            <label class="form-check-label">Motivational Talks</label>
                        </div>

                        <div class="form-check">
                <input className="form-check-input" type="checkbox" name="option1" value="something" />
                <label class="form-check-label">Planatation Drives</label>
              </div>

              <div class="form-check">
                <input className="form-check-input" type="checkbox" name="option1" value="something" />
                <label class="form-check-label">Orphanage Visit</label>
              </div>

              <div class="form-check">
                <input className="form-check-input" type="checkbox" name="option1" value="something" />
                <label class="form-check-label">Visiting patients into hospitals</label>
              </div>

              <div class="form-check">
                <input className="form-check-input" type="checkbox" name="option1" value="something" />
                <label class="form-check-label">Recreational Visit</label>
              </div>

              <div class="form-check">
                <input className="form-check-input" type="checkbox" name="option1" value="something" />
                <label class="form-check-label">Old home Visit</label>
              </div>

              <div class="form-check">
                <input className="form-check-input" type="checkbox" name="option1" value="something" />
                <label class="form-check-label">Book reading / discussion</label>
              </div>
                        
                       </form>
                   </div>
}
               </div>
            </li>
            
            </ul>
        <div class="modal fade" id="hobbiesEditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default DashboardSidebar;