import React, {Component} from'react'
class Formhandling extends Component{
    constructor(props){
        super (props)
        this.state={
            sname:'',
            gender:'',
            gen:'',
            addr:''
        }
    }
    nameHandler=(event)=>{
        this.setState({
            sname:event.target.value
        })
    }
    genderHandler=(event)=>{
        this.setState({
            gender:event.target.value
        })
    }
    addrHandler=(event)=>{
        this.setState({
            addr:event.target.value
        })
    }
    genHandler=(event)=>{
        this.setState({
            gen:event.target.value
        })
    }
    sumbitHandler=(event)=>{
        alert(
          "Name:"+`${this.state.sname}`+
          "Address:"+`${this.state.addr}`+ 
          "Radio Gender:"+`${this.state.gen}`+
          "Gender:"+`${this.state.gender}` 
        )
}
render(){
    return(
    <form onsubmit={this.sumbitHandler}>
        <div>
            <label>Enter the name</label>
            <input type="text"value={this.state.sname}
            onChange={this.nameHandler}></input>
        </div>
         <div>
            <label>Choose the Gender</label>
            Select value={this.state.gender}
            onChange={this.genderHandler};
            <option>Male</option>
            <option>Female</option>
            <select/>
        </div>
         <div value={this.state.gen} onChange={this.genHandler}>
            <label>Choose the Gender</label>
           <input type="radio"name="gen"value="Male"/>Male
           <input type="radio"name="gen"value="female"/>Female
        </div>
        <div>
             <label>Enter the Address</label>
             <textarea row="3"value={this.state.addr}
             onChange={this.addrHandler}></textarea>
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
    )
}
}
export default Formhandling