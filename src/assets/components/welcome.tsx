import type { CSSProperties } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Welcome = ({name}: {name: string}) => {

    const style: CSSProperties = {
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        

    }
    return (

        
        <div style= {style}>
            <h1>Welcome {name}</h1>
        </div>
    );
}

export default Welcome;