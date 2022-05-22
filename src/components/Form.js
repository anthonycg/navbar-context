import React, { useState } from "react";
import NameContext from "../context/NameContext"
import { useContext } from "react";



const Form = () => {
    const context = useContext(NameContext)

    // const [username, setUsername] = useState("");
    const handleUserName = (e) => {
        e.preventDefault();
        context.setUsername(context.username);
        console.log(context.username)
    }
    return (
        <div>
            <form onSubmit={handleUserName}>
            <label>Change Name</label>
            <input
            onChange={(e) => context.setUsername(e.target.value)}
            value ={context.username}
            ></input>
            </form>
        </div>
    )
} 

export default Form;