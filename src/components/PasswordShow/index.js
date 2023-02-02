import React, { Component } from 'react'
import './index.css'

export default class PasswordShowCard extends Component {

  state = { passwordCounter: 0 }

  inputChangeHandler = () => {

  }

  render() {
    return (
      <div className="show-password-container">
        <div className="show-password-header">
          <div className='heading-box'>
            <p className="password-count-heading">Your Passwords</p>
            <div className='password-count'>{this.state.passwordCounter}</div>
          </div>
          <div className="search-input-box">
            <img className='search-icon' src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt="search" />

            <input onChange={this.inputChangeHandler} className='search-input' type="text" placeholder='Search' />

          </div>
        </div>
      </div>
    )
  }
}
