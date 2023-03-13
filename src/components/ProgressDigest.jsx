import { useState, useEffect } from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import Button from './ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/QuestProgress.module.css';

function ProgressDigest(props) {
    const [progress, setProgress] = useState(0);
    const [pagesRead, setPagesRead] = useState(0);
    const [totalPages, setTotalPages] = useState(226);

    useEffect(() => {
        if (pagesRead < 0) {
            setPagesRead(0);
        }

        if (pagesRead > totalPages) {
            setPagesRead(totalPages);
        }

        setProgress((pagesRead / totalPages) * 100);
    }, [pagesRead, totalPages]);

    const incrementProgress = () => {
        setPagesRead(prevPagesRead =>
            parseInt(prevPagesRead) + 1 > totalPages
                ? totalPages
                : parseInt(prevPagesRead) + 1,
        );
    };

    const decrementProgress = () => {
        setPagesRead(prevPagesRead =>
            parseInt(prevPagesRead) - 1 === 0 ? 0 : parseInt(prevPagesRead) - 1,
        );
    };

    return (
        <>
            <Card className='shadow-sm'>
                <Card.Header as='h5'>
                    🐉 Defeat the Multiheaded Complexity Dragon
                </Card.Header>
                <Card.Body>
                    <Card.Title>📚 Think Like a Programmer</Card.Title>
                    <Card.Text>
                        <p className='fw-light'>
                            Make progress by reading the book
                        </p>
                        <Button
                            className={styles.addProgressButton}
                            onClick={decrementProgress}
                            marginRight>
                            <FontAwesomeIcon icon={faCircleMinus} />
                        </Button>
                        <input
                            className={styles.progressInput}
                            type='number'
                            placeholder='Pages read'
                            onChange={e => setPagesRead(e.target.value)}
                            value={pagesRead}
                        />
                        <Button
                            className={styles.addProgressButton}
                            onClick={incrementProgress}
                            marginLeft>
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </Button>

                        <span> of </span>
                        <input
                            className={styles.progressInput}
                            type='number'
                            placeholder='Total pages'
                            value='226'
                            disabled
                        />
                        <ProgressBar
                            animated
                            // now={props.now}
                            now={progress}
                            label={`${Math.floor(progress)}%`}
                            // variant='success'
                            className={styles.progress}></ProgressBar>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted fs-6 fw-light'>
                    <span className={styles.tag}> Book</span>
                    <span>Last activity on: 24 January 2021</span>
                </Card.Footer>
            </Card>
        </>
    );
}

export default ProgressDigest;
