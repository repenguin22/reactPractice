// import react react-DOM
import React from 'react';
import ReactDOM from 'react-dom';

// create react component
const App = () => {
    return <div>Hi there!</div>
}

// take the react component and show it on the screen
ReactDOM.render(
    <App />,
    // public/index.html reference id=root
    document.querySelector('#root')
)
