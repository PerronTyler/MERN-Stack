import React, { Component } from 'react'

class PersonCard extends Component{
    constructor(props){
      super(props)
      this.state = {
          age: this.props.age
      }
    }
    grow = (e) => {
      this.setState({age:this.state.age +=1 })
    }
    render(){
      return (
      <div>
        <h1>{ this.props.lastname } , { this.props.firstname }</h1>
        <p>Age: { this.state.age }</p>
        <p>Hair Color: { this.props.haircolor }</p>
        <button onClick={ this.grow }> Grow</button>
      </div>
      )
    }
}


export default PersonCard