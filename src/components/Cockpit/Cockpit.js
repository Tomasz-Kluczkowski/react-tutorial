import React from 'react'
import classes from "./Cockpit.css";
// import Aux from '../../hoc/Aux'

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red
    }
        if (props.persons.length <= 2) {
            assignedClasses.push(classes.red)
        }
        if (props.persons.length <= 1) {
            assignedClasses.push(classes.bold)
        }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is dynamic CSS</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Names
            </button>
        </div>
    )
};

export default cockpit