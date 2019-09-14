import React from 'react'

const loginHandler=()=>{

}
const registerHandler=()=>{

}
const submitHandler=(e)=>{
e.preventDefault();
}
export const Registration = (props) => {
    return (
        <div>
            <h1>Authorisation</h1>
            <form onSubmit={this.submitHandler}>
                <input placeholder={"Enter name and surname"} />
                <input placeholder={"Enter age"} />
                <input placeholder={"Enter email"} />
<button type={"success"} onClick={this.loginHandler}>Sign in</button>
                <button type={"primary"} onClick={this.registerHandler}>Register</button>

            </form>

        </div>
    )
};