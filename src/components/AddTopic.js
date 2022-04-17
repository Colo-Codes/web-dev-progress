import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Row } from 'react-bootstrap';

function AddTopic(props) {
    return (
        <>
            <Card className='m-5 p-3 bg-light'>
                <Row className=''>
                    <Col sm={2}>{/* <User /> */}</Col>
                    <Col>
                        <Button variant='primary'>
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
