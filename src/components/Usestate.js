import React, { useState } from 'react'
function Login(){
    const[Email,setEmail]=useState("")
    const[Pass,setpass]=useState("")
    function sumbitHandler(){
        if(Email==="admin@admin.com"&Pass==="123"){
            alert("success")

        }
        else
        {
            alert("failed")
        }
    }
return(
    <form onSubmit={sumbitHandler}>
        <div>
            <label htmlfor="email">Email</label>
            <input type="text"value={Email}onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div>
            <label htmlfor="pass">password</label>
            <input type="password"value={Pass}onChange={(e)=>setpass(e.target.value)}></input>
        </div>
        <button>Submit</button>
    </form>
)
}
export default Login