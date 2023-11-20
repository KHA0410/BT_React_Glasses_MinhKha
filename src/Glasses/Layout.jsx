import React, { Component } from 'react'
import Header from './Header'
import FaceLeft from './FaceLeft'
import FaceRight from './FaceRight'
import ListGlasses from './ListGlasses'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div>
        <Header/>
        </div>
        <div className='row ms-5'>
            <div className='col-6'>
                <FaceLeft/>
            </div>
            <div className='col-6'>
                <FaceRight/>
            </div>
        </div>
        <div>
            <ListGlasses/>
        </div>
      </div>
    )
  }
}
