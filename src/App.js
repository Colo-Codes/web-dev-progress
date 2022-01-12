import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
// import { Alert, Button } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header />
            <Alert variant='success'>Bootstrap up and running!</Alert>
        </>
    );
}

export default App;
