import React from "react";
import Counter from "./Counter";

const NavBar = props => (
    <nav className="navbar navbar-dark bg-success sticky-top">
        <span>Memory Game</span>
        <span className="text-center">You Guessed Correctly!</span>
        {/* <span>Score: X  |  TopScore: Y</span> */}
        <span><Counter score={props.score}/></span>
    </nav>
)

export default NavBar;