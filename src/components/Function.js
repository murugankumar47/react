//import React from 'react'
import React,{Component} from 'react'
class Function extends Component{
//function Function(){
  render(){
  return React.createElement( //<h1> SM</h1>
  'div',
    {
      class:"sample",id:"h1id"
    },
    React.createElement('h1',null,"SM")
    )
}
} 
export default Function