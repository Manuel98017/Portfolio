import { useState, useEffect } from 'react';

const Tests = () => {

    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(23);
    const [renders, setRenders] = useState(0);

    const handleClick = () => {
        setName('Luigi');
        setAge(30)
    }

    return ( 
        <div className="home">
            <h2>Tests</h2>
            <h3>Page rendered { renders } times.</h3>
            <p> { name }  is { age } years old. </p>
            <button onClick={handleClick}>Click</button>
        </div>
     );
}
 
export default Tests;