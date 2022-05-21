import React, { useContext } from "react";
import NameContext from "../context/Name"

const NavBar = (props) => {
    const context = useContext(NameContext)
    return (
        <div>
            <div style={{backgroundColor: "blue"}}> Hi, {context}!</div>
        </div>
    )
} 

export default NavBar;