import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, Card, Col, Row, Form } from 'react-bootstrap';
import { useState } from 'react';

function AddTopic(props) {
    const [state, setState] = useState({
        show: false,
    });

    console.log(state.show);

    const addTopicModal = (
        <Modal show={state.show} onHide={() => {}}>
            <Modal.Header closeButton>
                <Modal.Title>Add a new topic</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Text className='text-muted'>
                        Woohoo, you're adding a new topic!
                    </Form.Text>
                    <Form.Group className='mb-3' controlId='formBasicText'>
                        {/* <Form.Label>Topic name</Form.Label> */}
                        <Form.Control type='text' placeholder='Topic name' />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicDescription'>
                        {/* <Form.Label>Description</Form.Label> */}
                        <Form.Control type='text' placeholder='Topic description`' />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                        <Form.Check type='checkbox' label='Check me out' />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant='secondary'
                    onClick={() =>
                        setState({
                            show: false,
                        })
                    }>
                    Close
                </Button>
                <Button variant='primary' onClick={() => {}}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );

    return (
        <>
            {addTopicModal}
            <Card className='m-5 p-3 bg-light'>
                <Row className=''>
                    <Col sm={2}>{/* <User /> */}</Col>
                    <Col>
                        <Button
                            variant='primary'
                            onClick={() =>
                                setState({
                                    show: true,
                                })
                            }>
                            <FontAwesomeIcon
                                icon={faPlus}
                                style={{ marginRight: '10px' }}
                            />
                            Add a topic
                        </Button>
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default AddTopic;
