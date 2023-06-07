import { useState } from 'react';
const Colorizer = () =>{
    const [color, setColor] = useState('#fda0c0');

    const changeColor = () => {
        setColor(getRandomColor());
    }
    const getRandomColor= () =>{
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }
    return(
        <div className="colorizer">
            <div className ="box" style={{backgroundColor: color}}>{color}</div>   
            <button id="changeColor" onClick={changeColor}>Change Color</button>
        </div>
    );


};

export default Colorizer;