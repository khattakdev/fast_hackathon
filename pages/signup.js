import { useState } from "react";
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
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

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
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="public_talks"
                name="public_talks"
                value="public_talks"
                checked={hobbies[0]}
                onChange={(e) => {
                  const updatedHobbies = [...hobbies];
                  updatedHobbies[0] = !hobbies[0];
                  setHobbies(updatedHobbies);
                }}
              />
              <label htmlFor="public_talks" className="form-check-label">
                Public Talks
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="motivational_talks"
                name="motivational_talks"
                value="motivational_talks"
                checked={hobbies[1]}
                onChange={(e) => {
                  const updatedHobbies = [...hobbies];
                  updatedHobbies[1] = !hobbies[1];
                  setHobbies(updatedHobbies);
                }}
              />
              <label htmlFor="motivational_talks" className="form-check-label">
                Motivational Talks
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="professional_talks"
                name="professional_talks"
                value="professional_talks"
                checked={hobbies[2]}
                onChange={(e) => {
                  const updatedHobbies = [...hobbies];
                  updatedHobbies[2] = !hobbies[2];
                  setHobbies(updatedHobbies);
                }}
              />
              <label htmlFor="professional_talks" className="form-check-label">
                Professional Talks
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="professional_tasks"
                name="professional_tasks"
                value="professional_tasks"
                checked={hobbies[3]}
                onChange={(e) => {
                  const updatedHobbies = [...hobbies];
                  updatedHobbies[3] = !hobbies[3];
                  setHobbies(updatedHobbies);
                }}
              />
              <label htmlFor="professional_tasks" className="form-check-label">
                Professional Tasks
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="plantation_drives"
                name="plantation_drives"
                value="plantation_drives"
                checked={hobbies[4]}
                onChange={(e) => {
                  const updatedHobbies = [...hobbies];
                  updatedHobbies[4] = !hobbies[4];
                  setHobbies(updatedHobbies);
                }}
              />
              <label htmlFor="plantation_drives" className="form-check-label">
                Plantation Drives
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="orphanage_visit"
                name="orphanage_visit"
                value="orphanage_visit"
                checked={hobbies[5]}
                onChange={(e) => {
                  const updatedHobbies = [...hobbies];
                  updatedHobbies[5] = !hobbies[5];
                  setHobbies(updatedHobbies);
                }}
              />
              <label htmlFor="orphanage_visit" className="form-check-label">
                Orphanage Visit
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="hospital_visit"
                name="hospital_visit"
                value="hospital_visit"
                checked={hobbies[6]}
                onChange={(e) => {
                  const updatedHobbies = [...hobbies];
                  updatedHobbies[6] = !hobbies[6];
                  setHobbies(updatedHobbies);
                }}
              />
              <label htmlFor="hospital_visit" className="form-check-label">
                Visiting patients into hospitals
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="recreational_visit"
                name="recreational_visit"
                value="recreational_visit"
                checked={hobbies[7]}
                onChange={(e) => {
                  const updatedHobbies = [...hobbies];
                  updatedHobbies[7] = !hobbies[7];
                  setHobbies(updatedHobbies);
                }}
              />
              <label htmlFor="recreational_visit" className="form-check-label">
                Recreational Visit
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="old_home_visit"
                name="old_home_visit"
                value="old_home_visit"
                checked={hobbies[8]}
                onChange={(e) => {
                  const updatedHobbies = [...hobbies];
                  updatedHobbies[8] = !hobbies[8];
                  setHobbies(updatedHobbies);
                }}
              />
              <label htmlFor="old_home_visit" className="form-check-label">
                Old home Visit
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="book_reading"
                name="book_reading"
                value="book_reading"
                checked={hobbies[9]}
                onChange={(e) => {
                  const updatedHobbies = [...hobbies];
                  updatedHobbies[9] = !hobbies[9];
                  setHobbies(updatedHobbies);
                }}
              />
              <label htmlFor="book_reading" className="form-check-label">
                Book reading / discussion
              </label>
            </div>
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
