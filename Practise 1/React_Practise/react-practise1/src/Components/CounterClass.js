import React from 'react';

class CounterByClass extends React.Component {
    constructor() {
        super()
        this.state = {
            count : 0
        }
    }

    updateCounter = () => {
        this.setState({count : this.state.count + 1})
    }

    render() {
        return(
            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.updateCounter}>Update Count</button>
            </>
        )
    }
}

export default CounterByClass