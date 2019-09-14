import React from 'react'


export const Form=(props)=>{
    return(
        <div>

            <form>
                <input placeholder={"Enter login"} onChange={props.handleChangeLogin}/>
                <input placeholder={"Enter password"} onChange={props.handleChangePassword}/>

            </form>
            <div onClick={props.handleClick}>Submit</div>
        </div>
    )

}