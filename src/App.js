
import './App.css';
import MoviesComponent from './MoviesComponent';
import Colorizer from './Colorize';
import Greetings from './Greetings';
import FindUser from './FindUser';

function App() {
    return (
        <div className='App'>
            <header className="App-header">
                <FindUser></FindUser>
                <Colorizer></Colorizer>
            </header>
        </div>
    );  
}

export default App;
