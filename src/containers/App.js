import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';


class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'Tom', age: 40},
            {id: 2, name: 'Mac', age: 39},
            {id: 3, name: 'Wiola', age: 18},
        ],
        showPersons: false,
    };

    deletePersonHandler = (index) => {
        const persons = this.state.persons;
        persons.splice(index, 1);
        this.setState({persons: persons})
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]};

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {

        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler} />
                </div>
            );
            btnClass = classes.Red
        }
        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red)
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold)
        }

        return (
                <div className={classes.App}>
                    <h1>Hi, hello world!</h1>
                    <p className={assignedClasses.join(' ')}>This is dynamic CSS</p>
                    <button
                        className={btnClass}
                        onClick={this.togglePersonsHandler}>Toggle Names
                    </button>
                    {persons}
                </div>
        );
    }
}

export default App;
