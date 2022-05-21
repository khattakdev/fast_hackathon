import classes from "../styles/auth.module.css";

function Login() {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <h1 className={classes.title}>Login</h1>

        <form>
          <div className="form-group w-25 m-auto mt-5">
            <label htmlFor="email" className={`text-center ${classes.labels}`}>Email</label>
            <input className={`form-control m-auto mt-1 p-3`} name="email" type="email" placeholder="enter your email"/>
          </div>

          <div className="form-group w-25 m-auto mt-5">
            <label htmlFor="password" className={`text-center ${classes.labels}`}>Password</label>
            <input className={`form-control m-auto mt-1 p-3`} name="password" type="password" placeholder="enter password"/>
          </div>

          <div className="form-group text-center m-auto mt-5">
            <button type="submit" className={`btn-block ${classes.mainButton}`}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
