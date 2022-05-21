import classes from "./index.module.css";

function Navbar({ setOption }) {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.logo}>VeteranMeet</h1>

      <ul className={classes.links}>
        <li onClick={() => setOption("veterans")}>Veterans</li>
        <li onClick={() => setOption("community")}>Communities</li>
        <li onClick={() => setOption("events")}>Events</li>
        <li>Sign Out</li>
      </ul>
    </nav>
  );
}

export default Navbar;
