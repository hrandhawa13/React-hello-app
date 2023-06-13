import { useState, useEffect } from "react";

const Greetings = ({randomMax}) => {
    const [randomNum, setRandomNum] = useState(
            Math.floor(Math.random()*randomMax)+1
            );
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        console.log('use effect');
    }, []);

    useEffect(() => {
        window.localStorage.setItem("randomNum", randomNum);
        if(randomMax === randomNum){
            window.localStorage.setItem("jackpot", true);
        }else{
            window.localStorage.setItem("jackpot", false);
        }
        switch (randomNum) {
            case 1: 
                setGreeting('Hello');
                break;
            case 2: 
                setGreeting('Howdy');
                break;
            case 3: 
                setGreeting('Hola');
                break;
            case 4: 
                setGreeting('Salud');
                break;
            case 5: 
                setGreeting('Hi');
                break;
            default: 
                setGreeting('Bonjour');
        }
    }, [randomNum, randomMax]) ;

    return (
        <div className="greetings">
            <h1>Random Greeting with Use Effect</h1>
            <h2>{greeting}</h2>
        </div>
    );

};

export default Greetings;