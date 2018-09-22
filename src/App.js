import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, hello world!</h1>
                <Person name="Tom" age="41"/>
                <Person name="Mac" age="40"/>
                <Person name="Wiola" age="18">My hobbies: tro lo lo</Person>
            </div>
        );
    }
}

export default App;
