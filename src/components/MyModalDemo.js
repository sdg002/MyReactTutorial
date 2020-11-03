import React, { Component } from 'react';
import Modal from "react-modal"
import MyModalOkCancelDialog from './MyModalOkCancelDialog'

class MyModalDemo extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
            isModalOpen:false,
            isOkCancelModalOpen:false
        }
    }

    OnShowModalClick=()=>
    {
        const existingState=this.state.isModalOpen;
        this.setState({
            isModalOpen:!existingState
        });
    }

    OnShowReusableModalClick=()=>
    {
        this.setState({
            isOkCancelModalOpen:!this.state.isOkCancelModalOpen
        });
    }

    OnModalCloseClick=(retval)=>
    {
        this.setState({
            isModalOpen:false
        });
        console.log(`Which button was click? Ok=${retval} Cancel=${!retval}`)

    }
    render() {
        return (
            <div>
                <h1>Demo of modal</h1>
                <button className="btn btn-primary btn-sm" onClick={()=>this.OnShowModalClick()}>Show me a modal</button>
                <button className="btn btn-secondary btn-sm" onClick={()=>this.OnShowReusableModalClick()}>Show me a reusable Ok Cancel modal dialog</button>
                <Modal isOpen={this.state.isModalOpen}>
                    <h3>Some modal dialog</h3>
                    <p>contents of the modal</p>
                    <button className="btn btn-sm btn-primary m-1" onClick={()=>this.OnModalCloseClick(true)}>Ok</button>
                    <button className="btn btn-sm btn-primary m-1" onClick={()=>this.OnModalCloseClick(false)}>Cancel</button>
                </Modal>
                <MyModalOkCancelDialog title="My alert title" text="This is my alert text" isOpen={this.state.isOkCancelModalOpen}></MyModalOkCancelDialog>
            </div>
        );
    }
}


export default MyModalDemo;