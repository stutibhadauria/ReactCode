import React, { Component } from 'react'

export default class Constructor extends Component {
    constructor(){
        console.log("hello");
        super();
        this.state={
            data:'ram'
        }
    }
  render() {
    console.log("hello render");
    return (
      <>
      <h1>hello constructor {this.state.data}</h1>
      </>
    )
  }
}
