import React from 'react';
import classes from "./header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
            <p className={classes.title}>Random Quotes!</p>
        </div>
    );
};

export default Header;