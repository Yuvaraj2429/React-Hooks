import React, { useState } from "react";

const HookTwo = () => {
    const [itemlist, setItemList] = useState(["Apple", "Orange", "Onion"]);
    const [newitem, pickitem] = useState("");

    const save = () => {
        setItemList((itemlist) => [...itemlist, newitem]); // a=a+b
        pickitem(""); // it will set empty to new variable item
    };
    const deleteitem = (index) => {
        itemlist.splice(index, 1);
        setItemList((itemlist) => [...itemlist]);
    };
    return (
        <div className="container mt-4 text-center">
            <div className="row">
                <div className="col-lg-6 offset-3">
                    <h3> usestate(), [....]Spread Operator Example</h3>
                    <p>
                        Item Name :{""}
                        <input type="text" onChange={(obj) => pickitem(obj.target.value)}
                            value={newitem} />
                        <button className="btn btn-primary" onClick={save}>Save item</button>
                    </p>
                    <table className="table table-bordered">
                        <thead>
                            <tr className="bg-light text-center">
                                <th> SI NO</th>
                                <th>Item Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemlist.map((name, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}
                                        </td>
                                        <td>{name}
                                        </td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={deleteitem.bind(this, index)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};
export default HookTwo