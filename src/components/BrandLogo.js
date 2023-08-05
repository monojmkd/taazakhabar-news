import React, { Component } from 'react'
import image from '../media/1.png'
export default class BrandLogo extends Component {
  render() {
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}} >
       <a href='/'><img src={image} style={{maxWidth:"100%"}} href='/' alt="..."></img></a> 
        </div>
    )
  }
}
