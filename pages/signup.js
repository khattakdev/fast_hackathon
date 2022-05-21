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
              <label htmlFor="type" className={`text-center ${classes.labels}`}>Type</label>
              <select className={`form-control m-auto mt-1 p-3`} name="type" id="">
                <option value="">Vetran</option>
                <option value="">NGO</option>
                <option value="">Educational Insitute</option>
              </select>
            </div>

            <div className="form-group w-50 m-auto mt-5">
              <label htmlFor="email" className={`text-center ${classes.labels}`}>Hobbies</label>
              <input className={`form-control m-auto mt-1 p-3`} name="email" type="email" placeholder="enter your Hobbies (sperateed by ,)"/>
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
