import React, { PureComponent } from 'react';

import Person from './Person/Person'

class Persons extends PureComponent {
    constructor (props) {
        super(props);
        this.lastPersonRef = React.createRef();
        console.log('persons constructor')
    }

    componentWillMount() {
        console.log('persons component will mount')
    }

    componentDidMount() {
        this.lastPersonRef.current.focus();
        console.log('persons component did mount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('UPDATE Persons.js, inside componentWillReceiveProps', nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[update Persons.js] inside shouldComponentUpdate', nextProps, nextState);
    //     return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('update persons.js inside compontnetWillUpdate', nextProps, nextState)
    }

    componentDidUpdate() {
        console.log('update persons.js inside componentDidUpdate')
    }

    render () {
        console.log('persons render');
        return this.props.persons.map((person, index) => {
            return <Person
                ref={this.lastPersonRef}
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