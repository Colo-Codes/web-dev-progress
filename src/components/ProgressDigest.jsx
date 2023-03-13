import { useState, useEffect } from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import styles from '../styles/QuestProgress.module.css';

function ProgressDigest(props) {
    const [progress, setProgress] = useState(0);
    const [pagesRead, setPagesRead] = useState(0);
    const [totalPages, setTotalPages] = useState(226);

    useEffect(() => {
        if (pagesRead > totalPages) {
            setPagesRead(totalPages);
        }

        setProgress((pagesRead / totalPages) * 100);
    }, [pagesRead, totalPages]);

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
                        <input
                            className={styles.progressInput}
                            type='number'
                            placeholder='Pages read'
                            onChange={e => setPagesRead(e.target.value)}
                            value={pagesRead}
                        />
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
