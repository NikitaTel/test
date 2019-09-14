import React,{useState} from 'react';
import {Form} from "./Form";
import {Content} from "./Content";


export const authorization=[
  {
    id:0,
    email:"1",
    password:"1"
  },
  {
    id:1,
    email:"2",
    password:"2"
  },
  {
    id:2,
    email:"3",
    password:"3"
  },
  {
    id:3,
    email:"4",
    password:"4"
  },
]

export const App=()=> {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();



  const generateLogin=(e)=>{
    setLogin(e.target.value)
  }
  const generatePassword=(e)=>{
    setPassword(e.target.value)
  }

  const [click,setClick]=useState(false)

  const generateClick=()=>{

  }


  return (

      <div>
        <Form handleChangeLogin={generateLogin} handleChangePassword={generatePassword} handleClick={generateClick} />
        <div > { authorization.map(data =>
        password === data.password && login === data.email? <Content />:<Form />

        ) }

            </div>
      </div>
  );
}