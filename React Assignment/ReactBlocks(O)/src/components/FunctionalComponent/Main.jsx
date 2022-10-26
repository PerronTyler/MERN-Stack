import React, { Component } from 'react'

class Main extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div className='main row'>  
            {this.props.children}
        </div>
        )
    }
}


export default Main