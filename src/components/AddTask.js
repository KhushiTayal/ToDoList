import React from "react";
import './AddTask.css';

class AddTask extends React.Component {
 state = {
        name : "",
        description : "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.description === ""){
            alert("All the feilds are compulsory!");
            return;
        }
        console.log(this.state);
        this.props.addcontacthandler(this.state);
        this.setState({name:"", description:""});
    };
    
    render(){
    return(
        <div className="render">
            <form className="form" onSubmit={this.add}>
            <div className="y">
                <div className="name">Task:</div>
                <input type="text" placeholder="Enter name here" name="name" value={this.state.name} onChange= {(e) => this.setState({name: e.target.value})}></input>
            </div>
            <div className="y">
                <div className="form-label">Description:</div>
                <input type="text" placeholder="Enter description here" name="email" value={this.state.description} onChange= {(e) => this.setState({description: e.target.value})}></input>
            </div>
            <div className="y">
                <button className="add">ADD</button>
            </div>
            </form>
        </div>
    );
    }
    
}

export default AddTask;