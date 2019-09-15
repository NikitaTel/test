import React from 'react'
import styles from "./Form.css";

export const Form=(props)=>{
    return(
        <div className={"form_container"}>
<h1>Sign in</h1>
            <form>
                <div className={"form_form"}>
                <input placeholder={"Enter login"} onChange={props.handleChangeLogin}/>
                <input placeholder={"Enter password"} onChange={props.handleChangePassword}/>
                </div>
            </form>
            <button onClick={props.handleClick}>Submit</button>
        </div>
    )

}