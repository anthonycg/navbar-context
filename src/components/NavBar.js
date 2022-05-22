import React, { useContext } from "react";
import NameContext from "../context/NameContext"

const NavBar = (props) => {
    const context = useContext(NameContext)
    return (
        <div>
            <div style={{backgroundColor: "blue"}}> Hi, {context.username}!</div>
        </div>
    )
} 

export default NavBar;