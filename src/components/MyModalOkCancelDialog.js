import React, { Component } from 'react';
import Modal from "react-modal"

class MyModalOkCancelDialog extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            isOpen:false
        }
    }

    componentDidUpdate(prevProps)
    {
        console.log(`did update old value:${prevProps.isOpen} , new value:${this.props.isOpen}`)
        if (this.props.isOpen != prevProps.isOpen)
        {
            this.setState({
                    isOpen:this.props.isOpen
                }
            );    
        }
    }
    OnOkClick=()=>
    {
        this.ShowDialog(false);
    }

    OnCancelClick=()=>
    {
        this.ShowDialog(false);
    }
    ShowDialog(isVisible)
    {
        this.setState({
            isOpen:isVisible
        }
    );    

    }

    render() {
        return (
            <div>                                
                <Modal isOpen={this.state.isOpen}>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.text}</p>
                    <div>
                        <button type="button" className="btn btn-primary m-1" onClick={this.OnOkClick}>Ok</button>
                        <button type="button" className="btn btn-secondary m-1" onClick={this.OnCancelClick}>Cancel</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default MyModalOkCancelDialog;