import React, { Component } from 'react'

 class Greet extends Component {
  render() {
    return (
      <div>
        
        <h1>Welcome to Online blogging {this.props.name} with id {this.props.id}</h1>
      </div>
    )
  }
}

export default Greet
