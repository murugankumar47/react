import React,{Component} from 'react'
class Statesamples extends Component{
    constructor(){
        super()
        this.state={
            msg:'GAN'
        }
    }
render(){
    return<h1>{this.state.msg}</h1>
       }
}
export default Statesamples