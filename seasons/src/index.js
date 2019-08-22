import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    state = { lat: null, errMsg: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errMsg: err.message })
        );
    }

    render() {
        return (
            <div>
                <SeasonDisplay lat={this.state.lat} />
                <br />
                Error: {this.state.errMsg}
            </div>
        );
    }


}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)