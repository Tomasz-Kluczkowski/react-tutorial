import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Tom', age: 40},
            {name: 'Mac', age: 39},
            {name: 'Wiola', age: 18},
        ],
        showPersons: false,
    };

    switchNameHandler = (newName) => {
        this.setState(
            {
                persons: [
                    {name: newName, age: 99},
                    {name: 'Mac', age: 39},
                    {name: 'Wiola', age: 17},
                ]
            }
        )
    };

    nameChangedHandler = (event) => {
        this.setState(
            {
                persons: [
                    {name: event.target.value, age: 99},
                    {name: 'Mac', age: 39},
                    {name: 'Wiola', age: 17},
                ]
            }
        )

    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, hello world!</h1>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Names
                </button>
                {this.state.showPersons ?
                    <div>
                        <Person
                            changedHandler={this.nameChangedHandler}
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}/>
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}/>
                        <Person
                            clickHandler={() => this.switchNameHandler('Arrow function handler')}
                            name={this.state.persons[2].name}
                            age={this.state.persons[2].age}>Hey hey hey</Person>

                    </div> : null
                }
            </div>
        );
    }
}

export default App;
