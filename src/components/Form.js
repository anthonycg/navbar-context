import React, { useState } from "react";
import NameContext from "../context/Name"



const Form = () => {
    const [username, setUsername] = useState("");
    const handleUserName = (e) => {
        e.preventDefault();
        setUsername(username);
        console.log(username)
    }
    return (
        <div>
            <form onSubmit={handleUserName}>
            <label>Change Name</label>
            <input
            onChange={(e) => setUsername(e.target.value)}
            value ={username}
            ></input>
            </form>
        </div>
    )
} 

export default Form;