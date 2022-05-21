import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "../axiosInstance";
import { toast, ToastContainer } from "react-nextjs-toast";
import classes from "../styles/auth.module.css";

function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [hobbies, setHobbies] = useState([
    {
      name: "Public Talk",
      value: "public_talks",
      checked: false,
    },
    {
      name: "Motivational Talk",
      value: "motivational_talks",
      checked: false,
    },
    {
      name: "Professional Talk",
      value: "professional_talks",
      checked: false,
    },
    {
      name: "Professional Task",
      value: "professional_task",
      checked: false,
    },
    {
      name: "Plantation Drives",
      value: "plantation_drives",
      checked: false,
    },
    {
      name: "Orphanage Visit",
      value: "orphanage_visit",
      checked: false,
    },
    {
      name: "Visiting patients into hospitals",
      value: "patient_visit",
      checked: false,
    },
    {
      name: "Recreational Visit",
      value: "recreational_visit",
      checked: false,
    },
    {
      name: "Old Home Visit",
      value: "old_home_visit",
      checked: false,
    },
    {
      name: "Book Reading / Discussion",
      value: "book_reading",
      checked: false,
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      toast.notify(`Password doesn't match!`);
      return;
    }

    const body = {
      email,
      name,
      password,
      confirmPassword,
      city,
      hobbies,
    };

    try {
      const res = await axios.post("/auth/register", body);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      console.log(res);
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
        <h1 className={classes.title}>Signup</h1>

        <form onSubmit={submitHandler}>
          <div className="form-group w-50 m-auto mt-5">
            <label htmlFor="email" className={`text-center ${classes.labels}`}>
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`form-control m-auto mt-1 p-3`}
              name="email"
              type="text"
              placeholder="enter your name"
            />
          </div>

          <div className="form-group w-50 m-auto mt-5">
            <label htmlFor="email" className={`text-center ${classes.labels}`}>
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-control m-auto mt-1 p-3`}
              name="email"
              type="email"
              placeholder="enter your email"
            />
          </div>

          <div className="form-group w-50 m-auto mt-5">
            <label htmlFor="city" className={`text-center ${classes.labels}`}>
              City
            </label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={`form-control m-auto mt-1 p-3`}
              name="email"
              type="text"
              placeholder="enter your city"
            />
          </div>

          <div className="form-group w-50 m-auto mt-5">
            <label htmlFor="email" className={`text-center ${classes.labels}`}>
              Hobbies
            </label>

            {hobbies.map((hobby, index) => (
              <div key={hobby.value} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={hobby.value}
                  name={hobby.value}
                  value={hobby.value}
                  checked={hobby.checked}
                  onChange={(e) => {
                    const updatedHobbies = [...hobbies];
                    updatedHobbies[index].checked = e.target.checked;
                    setHobbies(updatedHobbies);
                  }}
                />
                <label htmlFor={hobby.value} className="form-check-label">
                  {hobby.name}
                </label>
              </div>
            ))}
          </div>

          <div className="form-group w-50 m-auto mt-5">
            <label
              htmlFor="password"
              className={`text-center ${classes.labels}`}
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-control m-auto mt-1 p-3`}
              name="email"
              type="password"
              placeholder="choose password"
            />
          </div>

          <div className="form-group w-50 m-auto mt-5">
            <label
              htmlFor="password"
              className={`text-center ${classes.labels}`}
            >
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`form-control m-auto mt-1 p-3`}
              name="email"
              type="password"
              placeholder="confirm your password"
            />
          </div>

          <div className="form-group text-center m-auto mt-5">
            <button type="submit" className={`btn-block ${classes.mainButton}`}>
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
