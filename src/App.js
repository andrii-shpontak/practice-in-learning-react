import {useState} from 'react';
import './App.css';
import Form from './Form';
import dataContext from './Context';


const {Provider} = dataContext;

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {
        setData({...data, mail: 'test@example.com'})
    }

    return (
        <Provider value={data}>
            <Form text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'second text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
