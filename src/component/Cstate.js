import React, { Component } from 'react'

export default class Cstate extends Component {
    constructor(){
        super();
        this.state={name:"stuti"}
    }
    updatedata(){
        this.setState({name:"disha"})
    }
  render() {
    return (
      <>
      <br/><br/><br/>
      <h1>{this.state.name}</h1>
      <button onClick={()=>this.updatedata()}>click</button>
      </>
    )
  }
}
