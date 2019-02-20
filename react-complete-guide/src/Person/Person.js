import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};
//children does not have to be string. it can be other html/react elements
export default person;