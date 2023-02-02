import React, { Component } from 'react'
import PasswordInputCard from '../PasswordInput'
import PasswordShowCard from '../PasswordShow'
import './index.css'

export default class MainPage extends Component {

    state={savedPasswordList:[]};

    handleAddBtnClick=(passwordDetails)=>{
        const arr=this.state.savedPasswordList;
        if(passwordDetails.website!==null && passwordDetails.username!==null && passwordDetails.password!==null)
        {
            arr.push(passwordDetails);
        }

        this.setState({savedPasswordList:arr});
        // this.setState({savedPasswordList:this.state.savedPasswordList.push(passwordDetailObject)});
        
    }

    render() {
        console.log(this.state.savedPasswordList)
        return (
            <div className="main-container">

                <img className='app-logo' src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png " alt="app logo" />

                <PasswordInputCard handleAddBtnClick={this.handleAddBtnClick} />

                <PasswordShowCard />

            </div>
        )
    }
}
