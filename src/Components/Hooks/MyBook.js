import React from "react";
const allbook =[
    {name:"Java Basic", price:400,qty:5},
    {name:"Python Basic", price:300,qty:4},
    {name:"Node Basic", price:600,qty:3},
    {name:"React Basic", price:200,qty:1},
    {name:"Angular Basic", price:700,qty:2},

];
const MyBook =()=>{
return(
    <div className="container mt-4 text-center">
    <div className="row">
      <div className="col-lg-6 offset-3">
         <table className="table table-bordered">
          <thead>
            <tr className="bg-light text-center">
              <th>SI NO</th>
              <th>Book Name</th>
              <th>Book Quantity</th>
              <th> Price</th>
              <th>TotalPrice</th>
              </tr>
          </thead>
          <tbody>
            {allbook.map((i, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.qty}</td>
                  <td>{i.price}</td>
                  <td>{i.qty * i.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
};
export default MyBook;