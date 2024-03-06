import React from 'react';

class StateInClass extends React.Component {
    constructor(){
        super();
        this.state = {
            data : "Tarun"
        }
    }

    updateData = () => {
        this.setState({data : "kumar"})
    }
    render(){
        return (
            <>
               <h1>{this.state.data}</h1>
               <button onClick={this.updateData}>Update Data</button>
            </>
            
        )
    }
}

export default StateInClass