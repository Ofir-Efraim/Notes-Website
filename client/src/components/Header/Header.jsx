import React from "react";
import useStyles from "./HeaderStyles";

const Header = () => {
    const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
        <h1 className={classes.headerTitle}>My Notes</h1>
    </div>
  )
}

export default Header