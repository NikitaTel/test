import React,{useState} from 'react';
import {Form} from "./Form";
import {Content} from "./Content";
import {Registration} from "./Registration"


//
// export let authorization=[
//   {
//
//     email:"1",
//     password:"1"
//   },
//   {
//
//     email:"2",
//     password:"2"
//   },
//   {
//
//     email:"3",
//     password:"3"
//   },
//   {
//
//     email:"4",
//     password:"4"
//   },
// ]
export const registerArray=[];

export const App=()=> {
  const [login, setLogin] = useState(0);
  const [password, setPassword] = useState(0);
const [logged,setLogged]=useState(false);
  const [signed,setSignIn]=useState(false);
const [clicked,setClick]=useState(false);

const [name,setName]=useState(0);
    const [surname,setSurname]=useState(0);
    const [years,setYears]=useState(0);
    const [mail,setMail]=useState(0);
    
    const[registrationPassword,setRegistrationPassword]=useState(0);

  const generateLogin=(e)=>{
    setLogin(e.target.value)
  }
  const generatePassword=(e)=>{
    setPassword(e.target.value)
  }

// const loggedTrue=()=>{
//
//   authorization.map(data=>
//           data.email===login&&data.password===password?setLogged(true):<h1>Incorrect login or password</h1>
//       )
//
// }

  const sign=()=>{
    setSignIn(true)
  }

  const generateFirstName=(e)=>{
      setName(e.target.value)
  }
    const generateLastName=(e)=>{
        setSurname(e.target.value)
    }
    const generateAge=(e)=>{
        setYears(e.target.value)
    }
    const generateEmail=(e)=>{
        setMail(e.target.value)
    }
const generateRegistrationPassword=(e)=>{
      setRegistrationPassword(e.target.value)
}

    const register=(e)=>{
    setSignIn(false)

e.preventDefault();
    let obj= {
          FirstName:name,
          LastName:surname,
          Age:years,
          email:mail,
          password:registrationPassword
      }
let serialObj=JSON.stringify(obj);
    localStorage.setItem(obj.email,serialObj);



  }

  const generateClick=()=>{
    setClick(true)
  }

  return (

      <div>
        <div>   {!signed?<Registration firstName={generateFirstName} registrationPassword={generateRegistrationPassword} lastName={generateLastName} age={generateAge} Email={generateEmail} handleSignIn={sign} handleRegister={register}/>:<Form  handleChangeLogin={generateLogin} handleChangePassword={generatePassword} handleClick={generateClick}/>}
        </div>
       <div>{
           loggedTrue()
       }

      {logged&&clicked?(<Content />):(<h1>Incorrect login or password</h1>)}

      </div>
      </div>


  )
}