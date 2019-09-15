import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import useLocation from './useLocation';

const App = () => {
    const [lat, errorMessage] = useLocation();
    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat) {
        content = <div><SeasonDisplay lat={lat} /></div>;
    } else {
        content = <Spinner msg='ろーでぃんぐなう ' />;
    }

    return <div className="border red">{content}</div>;
};

// class App extends React.Component {
//     state = { lat: null, errMsg: '' };

//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(
//             position => this.setState({ lat: position.coords.latitude }),
//             err => this.setState({ errMsg: err.message })
//         );
//     }

//     renderContent() {
//         if (this.state.errMsg && !this.state.lat) {
//             return <div>Error: {this.state.errMsg}</div>
//         }
//         if (!this.state.errMsg && this.state.lat) {
//             return <div><SeasonDisplay lat={this.state.lat} /></div>
//         }
//         return <Spinner msg='ろーでぃんぐなう ' />
//     }

//     render() {
//         return <div className="border red">{this.renderContent()}</div>
//     }


// }

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

