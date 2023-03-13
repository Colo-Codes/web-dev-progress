import 'bootstrap/dist/css/bootstrap.min.css';
// import Alert from 'react-bootstrap/Alert';
// import { Alert, Button } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import AddTopic from './components/AddTopic';

function App() {
    return (
        <>
            <Header />
            <AddTopic />
        </>
    );
}

export default App;
