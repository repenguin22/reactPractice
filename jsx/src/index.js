// import react react-DOM
import React from 'react';
import ReactDOM from 'react-dom';

// create react component
const App = () => {

    const buttonText = { text: 'Click me' }

    return (
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
        </div>
    )
}

// take the react component and show it on the screen
ReactDOM.render(
    <App />,
    // public/index.html reference id=root
    document.querySelector('#root')
)
