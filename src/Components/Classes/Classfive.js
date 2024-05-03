import React,{Component} from 'react'



class Myclasssfive extends Component {
    constructor() {
        super();
        this.state = {
            booklist:[
                { name:"PHP", price: 500, author:"Vinayak" },
                { name:"java", price: 300, author:"Logan" },
                { name:"CSS", price: 400, author:"Moorthy" }
            ],
            newbook:{},
            message:"",
        };

    };

    pickvalue = (obj) => {
        let newbook = this.state.newbook;
        newbook[obj.target.name] = obj.target.value;
        this.setState({
            newbook,
        });
    };

    save=()=>{
        this.setSate({
            booklist: this.state.booklist.concat(this.state.newbook),
            message : this.state.newbook.name + "-: Added Successfully....",
            newbook: {name: "",price: "",author:""},
        });
    };

    deletebook =(index) => {
        var name = this.state.booklist[index].name;
        this.state.booklist.splice(index, 1);
        this.setState({
            booklist:this.state.booklist,
            message: name+"-: Deleted Successfully.....",
        });

    };

    render() {
        return (
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <h3 className='text-warning'>Add New Book</h3>
                        <div className='mb-3'>
                            <label>Book Name</label>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                onChange={this.pickvalue}
                                value={this.state.newbook.name}
                            />    
                        </div> 
                        <div className='mb-3'>
                            <label>Book Price</label>
                            <input
                                type='text'
                                className='form-control'
                                name='price'
                                onChange={this.pickvalue}
                                value={this.state.newbook.price}
                            />    
                        </div> 
                        <div className='mb-3'>
                            <label>Book author</label>
                            <input
                                type='text'
                                className='form-control'
                                name='author'
                                onChange={this.pickvalue}
                                value={this.state.newbook.author}
                            />    
                        </div> 
                        <button className="btn btn-primary ml-5" onClick={this.save}>
                             Save Book
                        </button>
                    </div>
                    <div className='col-lg-9'>
                         <h3 className='text-center text-info'>Available Book List</h3>
                        <p>{ this.state.massage}</p>
                        <table className='table'>
                            <thead>
                                 <tr>
                                    <th>Book SI No</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Author</th>
                                    <th>Action</th>
                                </tr>
                             </thead>
                            <tbody>
                                {this.state.booklist.map((info, index) =>{
                                  return (
                                     <tr key={index}>
                                         <td>{index + 1}</td>
                                         <td>{info.name}</td>
                                         <td>{info.price}</td>
                                         <td>{info.author}</td>
                                         <td>
                                            <button
                                                 className='btn btn-danger btn-sm'
                                                onClick={this.deletebook.bind(this,index)}>
                                                 Delete
                                            </button>
                                         </td>
                                     </tr>
                                     )
                                 })}
                          </tbody>
                        </table>
                    </div>
            
                 </div>
                
            </div>

            
        );
    };
};



export default Myclasssfive;