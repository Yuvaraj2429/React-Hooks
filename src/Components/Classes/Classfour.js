import React, { Component } from 'react';
class Myclassfour extends Component {
    constructor() {
        super();
        this.state = {
            newbook: "",
            message: "",
            booklist: ["Python", "Java", "PHP"],


        };
    }
    pickvalue = (obj) => {
        this.setState({
            newbook: obj.target.value,
        });
    };
    save = () => {
        this.setState({
            booklist: this.state.booklist.concat(this.state.newbook),
            message: this.state.newbook + ":Added Successfully....",
            newbook: "",

        })
    };
    deletebook = (index) => {
        var name = this.state.booklist[index];
        this.state.booklist.splice(index, 1);
        this.setState({
            booklist: this.state.booklist,
            message: name + ":Deleted Succeesfully",
        });
    };
    render() {
        return (
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-8 offest-2'>
                        <p>
                            Enter Book Name:
                            <input type="text" className='form-control' onChange={this.pickvalue} value={this.state.newbook} />
                            <button className='btn btn-primary m-2' onClick={this.save}>Save Book</button>
                        </p>
                        <h3 className='text-center'>Available Books</h3>
                        <p className='text-center'> {this.state.message}

                        </p>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>SI No</th>
                                    <th>Book Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.booklist.map((name, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{name}</td>

                                            <td>
                                                <button className='btn btn-danger btn-sm' onClick={this.deletebook.bind(this, index)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>

                                    );
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Myclassfour