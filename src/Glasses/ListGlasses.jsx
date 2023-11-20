import React, { Component } from 'react'

export default class ListGlasses extends Component {
  state = {
    glass: "v1"
  }
  handleGlass = (value) => {
    this.setState({glass: value})
  }
  render() {
    return (
      
      <div className='layout container'>
        <div className='glassChange'>
          <img className='' src={`./img/imgGlasses/Bài tập glasses/glassesImage/${this.state.glass}.png`} />
        </div>
        
        <div className='row'>
      <div className='col-2 glass'><button onClick = {()=>{this.handleGlass("v1")}}>
        <img src="./img/imgGlasses/Bài tập glasses/glassesImage/v1.png" alt="" /></button></div>
      <div className='col-2'><button onClick = {()=>{this.handleGlass("v2")}}>
        <img src="./img/imgGlasses/Bài tập glasses/glassesImage/v2.png" alt="" /></button></div>
      <div className='col-2'><button onClick = {()=>{this.handleGlass("v3")}}>
        <img src="./img/imgGlasses/Bài tập glasses/glassesImage/v3.png" alt="" /></button></div>
      <div className='col-2'><button onClick = {()=>{this.handleGlass("v4")}}>
        <img src="./img/imgGlasses/Bài tập glasses/glassesImage/v4.png" alt="" /></button></div>
      <div className='col-2'><button onClick = {()=>{this.handleGlass("v5")}}>
        <img src="./img/imgGlasses/Bài tập glasses/glassesImage/v5.png" alt="" /></button></div>
      <div className='col-2'><button onClick = {()=>{this.handleGlass("v6")}}>
        <img src="./img/imgGlasses/Bài tập glasses/glassesImage/v6.png" alt="" /></button></div>
      <div className='col-2'><button onClick = {()=>{this.handleGlass("v7")}}>
        <img src="./img/imgGlasses/Bài tập glasses/glassesImage/v7.png" alt="" /></button></div>
      <div className='col-2'><button onClick = {()=>{this.handleGlass("v8")}}>
        <img src="./img/imgGlasses/Bài tập glasses/glassesImage/v8.png" alt="" /></button></div>
      <div className='col-2'><button onClick = {()=>{this.handleGlass("v9")}}>
        <img src="./img/imgGlasses/Bài tập glasses/glassesImage/v9.png" alt="" /></button></div>
        </div>
      </div>
    )
  }
}
