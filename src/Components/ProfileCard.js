import React from "react";
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

export default function ProfileCard({ contactprops }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Card>
                <Card.Body>
                    <Image src={contactprops.avatarImage} roundedCircle thumbnail />
                    <Card.Title>
                        {contactprops.firstName} {contactprops.lastName}
                    </Card.Title>
                    <Card.Text>
                        <a href="{`mailto:${contactprops.email}`}">{contactprops.email}</a>
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow} size="md">
                        More details
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Image src={contactprops.avatarImage} roundedCircle thumbnail />
                    <h3>{contactprops.firstName} {contactprops.lastName}<sup>{contactprops.id}</sup></h3>
                </Modal.Body>
                <Row className="contactInfo">
                    <Col>
                        <div className="circle email"></div>
                        <p><a href="{`mailto:${contactprops.email}`}">{contactprops.email}</a></p>
                    </Col>
                    <Col>
                        <div className="circle phone"></div>
                        <p><a href="{`tel:${contactprops.phone}}`">{contactprops.phone}</a></p>
                    </Col>
                </Row>
            </Modal>
            
        </>   

    );
}