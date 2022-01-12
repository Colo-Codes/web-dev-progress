import { Card, ProgressBar } from 'react-bootstrap';

function ProgressDigest(props) {
    return (
        <>
            <Card className='shadow-sm'>
                {/* <Card.Header as='h5'>WebDev</Card.Header> */}
                <Card.Body>
                    {/* <Card.Title>Title</Card.Title> */}
                    <Card.Text>
                        <p className='fw-light'>
                            Overall progress towards becoming a front end web
                            developer
                        </p>
                        <ProgressBar
                            now={props.now}
                            label={`${props.now}%`}></ProgressBar>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted fs-6 fw-light'>
                    Last activity on: 24 January 2021
                </Card.Footer>
            </Card>
        </>
    );
}

export default ProgressDigest;
