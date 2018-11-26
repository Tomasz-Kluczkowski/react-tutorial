import React, { Component } from 'react';
import WithClass from '../../../hoc/WithClass'
import PropTypes from 'prop-types';

import classes from './Person.css';

class Person extends Component {
    constructor (props) {
        super(props);
        console.log('person constructor')
    }

    componentWillMount() {
        console.log('person component will mount')
    }

    componentDidMount() {
        console.log('person component did mount')
    }

    render () {
        console.log('person render');
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </WithClass>
        )
    }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;