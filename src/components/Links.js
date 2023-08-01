import React, { Component } from 'react'
import './links.css';


export class Links extends Component {
  constructor(props){
    super(props)
  }

  render() {
    // console.log(this.props)
    return (
      <div className='links'>
        <h3>Links</h3>
        <a href={this.props.github}>{this.props.github}</a>
        <a href={this.props.linkedin}>{this.props.linkedin}</a>
      </div>
    )
  }
}

export default Links