import classes from "./index.module.css";

function Navbar() {
  return (
    <nav className={classes.nav}>
      <h1 className={classes.logo}>VeteranMeet</h1>

      <ul className={classes.links}>
        <li>Veterans</li>
        <li>Communities</li>
        <li>Events</li>
        <li>Sign Out</li>
      </ul>
    </nav>
  );
}

export default Navbar;
