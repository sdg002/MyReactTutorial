import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from "react-modal"

class MyModalDemo extends Component {
    constructor(props)
    {
        super(props);
        this.state=
        {
            isModalOpen:false
        }
    }

    OnShowModalClick=()=>
    {
        const existingState=this.state.isModalOpen;
        this.setState({
            isModalOpen:!existingState
        });
    }
    OnOkClick=(retval)=>
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
                <Modal isOpen={this.state.isModalOpen}>
                    <h3>Some modal dialog</h3>
                    <p>contents of the modal</p>
                    <button className="btn btn-sm btn-primary m-1" onClick={()=>this.OnOkClick(true)}>Ok</button>
                    <button className="btn btn-sm btn-primary m-1" onClick={()=>this.OnOkClick(false)}>Cancel</button>
                </Modal>
            </div>
        );
    }
}

MyModalDemo.propTypes = {

};

export default MyModalDemo;