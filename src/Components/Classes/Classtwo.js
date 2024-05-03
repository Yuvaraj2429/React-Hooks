import React, { Component } from "react";

class Myclasstwo extends Component {
    constructor() {
        super();
        this.state = {
            itemlist: [
                "Mouse",
                "keyborad",
                "Laptop",
                "Scanner",
                "Printer",
                "Pen Drive",
            ],
            customer: [
                {name: "Karthick", mobile: 8072114929, age: "24 Years"},
                {name: "Ganesh", mobile: 8072114929, age: "25 Years"},
                {name: "Prasanth", mobile: 8072114929, age: "26 Years"},
                {name: "Tamil", mobile: 8072114929, age: "23 Years"},
                {name: "Dinesh", mobile: 8072114929, age: "22 Years"},
            ],
        };
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3> State Management For Single Dimensional Array</h3>
                        <i className="fa fa-desktop fa-5x"></i>
                    </div>
                    <div className="col-lg-12 text-center">
                        <h3>Customer List</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Customer id</th>
                                    <th>Full Name</th>
                                    <th>Mobile No</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.customer.map((info, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index +1}</td>
                                            <td>{info.name}</td>
                                            <td>{info.mobile}</td>
                                            <td>{info.age}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


export default Myclasstwo;