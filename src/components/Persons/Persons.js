import React, { Component } from 'react';

import Person from './Person/Person'

class Persons extends Component {
    constructor (props) {
        super(props);
        console.log('persons constructor')
    }

    componentWillMount() {
        console.log('persons component will mount')
    }

    componentDidMount() {
        console.log('persons component did mount')
    }


    render () {
        console.log('persons render');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}

export default Persons;