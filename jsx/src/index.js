// import react react-DOM
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

// create react component
const App = () => {

    return (
        <div>
            <label className="label" for="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
        </div>
    )
}

// take the react component and show it on the screen
ReactDOM.render(
    <App />,
    // public/index.html reference id=root
    document.querySelector('#root')
)
