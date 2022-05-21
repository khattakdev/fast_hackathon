import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-nextjs-toast";
import classes from "../styles/auth.module.css";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    try {
      const res = await axios.post("/auth/login", body);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      router.push("/");
    } catch (error) {
      if (error.response.data.error[0]) {
        toast.notify(error.response.data.error[0]);
      } else {
        toast.notify("Something went wrong!");
      }
    }
  };
  return (
    <div className={classes.body}>
      <ToastContainer />
      <div className={classes.container}>
        <h1 className={classes.title}>Login</h1>

        <form onSubmit={onSubmit}>
          <div className="form-group w-25 m-auto mt-5">
            <label htmlFor="email" className={`text-center ${classes.labels}`}>
              Email
            </label>
            <input
              className={`form-control m-auto mt-1 p-3`}
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                const updatedValue = e.target.value;
                setEmail(updatedValue);
              }}
              placeholder="enter your email"
            />
          </div>

          <div className="form-group w-25 m-auto mt-5">
            <label
              htmlFor="password"
              className={`text-center ${classes.labels}`}
            >
              Password
            </label>
            <input
              className={`form-control m-auto mt-1 p-3`}
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                const updatedPassword = e.target.value;
                setPassword(updatedPassword);
              }}
              placeholder="enter password"
            />
          </div>

          <div className="form-group text-center m-auto mt-5">
            <button type="submit" className={`btn-block ${classes.mainButton}`}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
