import React, {PureComponent} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass';
import Cockpit from '../components/Cockpit/Cockpit';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

    constructor (props) {
        super(props);
        console.log('app constructor');
        this.state = {
            persons: [
                {id: 1, name: 'Tom', age: 40},
                {id: 2, name: 'Mac', age: 39},
                {id: 3, name: 'Wiola', age: 18},
            ],
            showPersons: false,
            toggleClicked: 0,
            authenticated: false
        };
    }


    componentWillMount() {
        console.log('app component will mount')
    }

    componentDidMount() {
        console.log('app component did mount')
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[update App.js] inside shouldComponentUpdate', nextProps, nextState);
    //     return true;
    // }

    componentDidUpdate() {
        console.log('update App.js inside componentDidUpdate')
    }



    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
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
        this.setState((prevState, props) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        })
    };

    loginHandler = () => {
        this.setState({authenticated: true})
    };

    render() {
        console.log('app render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );
        }

        return (
                <WithClass classes={classes.App}>
                    <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                    <Cockpit
                        appTitle={this.props.title}
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                        login={this.loginHandler}
                    />
                    <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
                </WithClass>
        );
    }
}

export default App;
