import React, { Component } from "react";

class Myclassthree extends Component {

    constructor() {
        super();
        this.state = {
            newbook:'',
            booklist:[]
        }
    }

    pickvalue = (obj) => {
        this.setState ({
            newbook:obj.target.value
        })
    }

    save = () => {
        this.setState({
            booklist : this.state.booklist.concat( this.state.newbook )
        })
    }

    render() {
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-6 offset-3">
                        <h3> State Managemnet with Input & Output</h3>
                        <p> Enter New Book name
                            <input type="text" className="form-control" onChange={this.pickvalue} />
                        </p>
                        <p>
                            <button onClick={this.save} className="btn btn-sucess" > Save Book </button>
                        </p>

                        <h4> Total Books : {this.state.booklist.length}</h4>
                        <p> Your New Book is : {this.state.newbook}</p>

                        {
                            this.state.booklist.map((name, index) => {
                                return (
                                    <p key={index}>{name}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Myclassthree