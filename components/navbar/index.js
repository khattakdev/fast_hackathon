import { useRouter } from "next/router";
import classes from "./index.module.css";

function Navbar({ setOption }) {
  const router = useRouter();
  const signOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <nav className={classes.nav}>
      <h1 className={classes.logo}>VeteranMeet</h1>

      <ul className={classes.links}>
        <li onClick={() => setOption("veterans")}>Veterans</li>
        <li onClick={() => setOption("community")}>Communities</li>
        <li onClick={() => setOption("events")}>Events</li>
        <li onClick={signOut}>Sign Out</li>
      </ul>
    </nav>
  );
}

export default Navbar;
