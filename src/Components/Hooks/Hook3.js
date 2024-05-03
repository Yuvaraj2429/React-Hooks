import React, { useState } from "react";

const HookThree = () => {
  const [itemlist, setItemList] = useState([
    { name: "Apple", price: 150, qty: 5 },
    { name: "Tomato", price: 250, qty: 5 },
    { name: "Onion", price: 50, qty: 5 },
  ]);
  const [ItemName, pickname] = useState("");
  const [ItemPrice, pickprice] = useState("");
  const [ItemQty, pickqty] = useState("");

  const save = () => {
    var newitem = { name: ItemName, price: ItemPrice, qty: ItemQty };
    setItemList((itemlist) => [...itemlist, newitem]);
    pickname("");
    pickprice("");
    pickqty("");
  };

  const deleteitem = (index) => {
    const updatedList = [...itemlist];
    updatedList.splice(index, 1);
    setItemList(updatedList);
  };

  return (
    <div className="container mt-4 text-center">
      <div className="row">
        <div className="col-lg-6 offset-3">
          <h3>usestate(), [....]Multi Dimensional Array</h3>
          <p>
            Item Name:
            <input
              type="text"
              onChange={(obj) => pickname(obj.target.value)}
              value={ItemName}
            />
            Price:
            <input
              type="text"
              onChange={(obj) => pickprice(obj.target.value)}
              value={ItemPrice}
            />
            Quantity:
            <input
              type="text"
              onChange={(obj) => pickqty(obj.target.value)}
              value={ItemQty}
            />
            <button className="btn btn-primary" onClick={save}>
              Save item
            </button>
          </p>
          <table className="table table-bordered">
            <thead>
              <tr className="bg-light text-center">
                <th>SI NO</th>
                <th>Item Name</th>
                <th>Item Quantity</th>
                <th>Item Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {itemlist.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteitem(index)}
                      >
                        Delete
                      </button>
                    </td>
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

export default HookThree;
