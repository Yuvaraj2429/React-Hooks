import React, { Component } from 'react';

class Myclassone extends Component {
    constructor() {
        super();
        this.state = { i: 5 }
    }
    one = () => {
        this.setState({ i: this.state.i + 5
         })

    }
    two = () => {
        this.setState({ i: this.state.i - 1 })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>State Management</h3>
                        <h1>The Counter is: {this.state.i}</h1>
                        <button className="btn btn-success m-3" onClick={this.one}>+ The value By 1</button>
                        <button className="btn btn-success m-3" onClick={this.two}>- The value By 1</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Myclassone