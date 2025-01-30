import React, { useState } from 'react'
const Login = () => {
   const [ username, setUsername ] = useState("")
   const [password, setPassword] = useState("")

   const handleChange= async ()=>{
       try{
      const response = await axios.post("https://rare-nebula-receipt.glitch.me/login",
      {
         username, password
      }) 
      console.log(response)
       } catch(err){

       }
   }
  return (
    <form action="">
        <input type="text"
         placeholder='Enter Username'
         value="username" 
         name='username'
         onChange={handleChange}
         />
         <input type="password" 
         placeholder='Enter Password'
         value="password" 
         name='password'
         onChange={handleChange}
         />
      <input type="submit" 
      placeholder='Login'
       />
    </form>
  )
}

export default Login
