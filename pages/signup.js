import classes from "../styles/auth.module.css";

function Signup() {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <h1 className={classes.title}>Signup</h1>

        <form>

            <div className="form-group w-50 m-auto mt-5">
              <label htmlFor="email" className={`text-center ${classes.labels}`}>Name</label>
              <input className={`form-control m-auto mt-1 p-3`} name="email" type="text" placeholder="enter your name"/>
            </div>

            <div className="form-group w-50 m-auto mt-5">
              <label htmlFor="email" className={`text-center ${classes.labels}`}>Email</label>
              <input className={`form-control m-auto mt-1 p-3`} name="email" type="email" placeholder="enter your email"/>
            </div>

            <div className="form-group w-50 m-auto mt-5">
              <label htmlFor="city" className={`text-center ${classes.labels}`}>City</label>
              <input className={`form-control m-auto mt-1 p-3`} name="email" type="text" placeholder="enter your city"/>
            </div>

            <div className="form-group w-50 m-auto mt-5">
              <label htmlFor="email" className={`text-center ${classes.labels}`}>Hobbies</label>
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
                <label class="form-check-label">Professional Talks</label>
              </div>

              <div class="form-check">
                <input className="form-check-input" type="checkbox" name="option1" value="something" />
                <label class="form-check-label">Professional Tasks</label>
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
            </div>

            <div className="form-group w-50 m-auto mt-5">
              <label htmlFor="password" className={`text-center ${classes.labels}`}>Password</label>
              <input className={`form-control m-auto mt-1 p-3`} name="email" type="password" placeholder="choose password"/>
            </div>

            <div className="form-group w-50 m-auto mt-5">
              <label htmlFor="password" className={`text-center ${classes.labels}`}>Confirm Password</label>
              <input className={`form-control m-auto mt-1 p-3`} name="email" type="password" placeholder="confirm your password"/>
            </div>
            

          <div className="form-group text-center m-auto mt-5">
            <button type="submit" className={`btn-block ${classes.mainButton}`}>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
