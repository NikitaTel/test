import React,{useState} from 'react'


import styles from "./Registration.css";



export const Registration = (props) => {



    return (
        <div className={"registration_container"}>
            <h1>Registration</h1>
            <form >
                <div className={"registration_form"}>
                <input placeholder={"Enter first name"} onChange={props.firstName}/>
                <input placeholder={"Enter last name"} onChange={props.lastName}/>

                    <input placeholder={"Enter age"} onChange={props.age} />
                <input placeholder={"Enter email"} onChange={props.Email} />
                    <input placeholder={"Enter password"} onChange={props.registrationPassword} />


                </div>
                <div className={"registration_buttons"}>
                    <button type={"primary"} onClick={props.handleRegister}> Register</button>
                    <button type={"success"} onClick={props.handleSignIn}>Sign in(if you already have an account)</button>

                </div>

            </form>

        </div>
    )
};