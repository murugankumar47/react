import React from 'react'
let Pchild=(props)=>{
    return(
        <div>
            <h1>welcome {props.name}MS from {props.city} </h1>
            {props.children}
        </div>
    )
}
export default Pchild