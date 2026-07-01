import {useState} from 'react'; 
//import { Card } from 'react-bootstrap';
import Welcome from './assets/components/welcome';
import Card from './assets/components/card';
import { Greet } from './assets/components/Greeting';
//import Message from './assets/ListGroup';

import Icon from './assets/components/Icon';
 
function App(){
    const style={
        backgroundColor:'#5c05f3',
        color: 'black'};


    

    
        const [status, setStatus]=useState('pending');
        const getStatusMessage=()=>{
            if(status==='pending') return 'pending';
            if(status==='successed') return 'you are successeded';
            if(status==='error') return 'error';
            return 'unknown status';

        };
    return (
        <div style={style}>
            <h1>{getStatusMessage()}</h1>
            <button onClick={() => setStatus('pending')}>🔃pending...</button><span />
            <button onClick={() => setStatus('error')}>Error</button><span />
            <button onClick={() => setStatus('successed')}>✅Success</button>
            <button onClick={() => setStatus('unknown')}>❌Unknown</button>

            <Greet isLoggedin={true} />
            <Card><Welcome name= "bonsa" /></Card>
            <Card><Welcome name="john"/></Card>
            <p style={style}>inline function</p>
            <Icon />
        </div>
    );
};
export default App;