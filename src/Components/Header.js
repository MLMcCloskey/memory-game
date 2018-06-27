import React from "react";

const Header = props => (
    <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="text-center">Memory Challenge</h1>
        <h4 className="instructions">Click on each unique glyph once. If you click a glyph you have already chosen, the game will reset!</h4>
    </header>
)

export default Header;