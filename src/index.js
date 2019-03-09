// Import the React and ReactDOM librarires
import React from 'react';
import ReactDOM from 'react-dom'; //We are using a bundler webpack in the project. Everything in here is a tiny universe. 
/* 
function getButtonText() {
    return 'To Submit!!'
} */

// Create a react componet
const App = () => {
    const buttonText = 'Click Me ';
    const labelText = 'Enter Name';
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'black', color: 'white' }}>{buttonText}</button>
        </div>
    )

}

// Take a react componet and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)