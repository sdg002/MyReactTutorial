import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class BootstrapModal extends Component {
    constructor(props)
    {
        super(props)
        this.state={ isOpen:false};
        this.state={ isGridModalOpen:false};
    }
    OnShowSimpleModalClick=()=>
    {
        this.setState({isOpen:true})
    }
    OnShowGridLayoutModalClick=()=>
    {
        this.setState({isGridModalOpen:true})
    }
    render() {
        return (
            <div>
                <h1>bootstrap modal comes here</h1>
                <button onClick={this.OnShowSimpleModalClick}>Show me a simplemodal</button>
                <button onClick={this.OnShowGridLayoutModalClick}>Show me a modal with Grid layout</button>
                <Modal show={this.state.isOpen}>
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>This is the body</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>                        
                    </Modal.Footer>
                </Modal> 

                <Modal  aria-labelledby="contained-modal-title-vcenter"  show={this.state.isGridModalOpen}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Using Grid in Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container>
                        <Row>
                            <Col xs={12} md={8}>
                            .col-xs-12 .col-md-8
                            </Col>
                            <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                            </Col>
                        </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>Close</Button>
                    </Modal.Footer>
                </Modal>                               
            </div>
        );
    }
}

export default BootstrapModal;