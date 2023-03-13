import { Card, Col, Row } from 'react-bootstrap';
import ProgressDigest from './ProgressDigest';
import User from './User';

function Header() {
    return (
        <header>
            <h1 className='text-center mt-3'>Web Dev Progress Tracker</h1>
            <Card className='m-5 p-3 bg-light'>
                <Row className=''>
                    <Col sm={3}>
                        <User />
                    </Col>
                    <Col>
                        <ProgressDigest now={75} />
                    </Col>
                </Row>
            </Card>
        </header>
    );
}

export default Header;
