import React from 'react'
import { useParams, Link } from 'react-router-dom';
const item = [
    { name: "Apple", price: 200, qty: 10 },
    { name: "Tomato", price: 400, qty: 5 },
    { name: "Orange", price: 800, qty: 8 },
    { name: "Fruit", price: 100, qty: 1 },
];
const HookFive = () => {
    const { id } = useParams();
    return (
        <div>
            <p className="m-4">
                <Link to="/Hook5/0" className="btn btn-warning m-3">
                    Apple
                </Link>
                <Link to="/Hook5/1" className="btn btn-warning m-3">
                    Tomato
                </Link>
                <Link to="/Hook5/2" className="btn btn-warning m-3">
                    Orange
                </Link>
                <Link to="/Hook5/3" className="btn btn-warning m-3">
                    Fruit
                </Link>
            </p>
            <div className="text-start">
                <h3 className="text-info">{item[id].name}</h3>
                <p>Price :{item[id].price}</p>
                <p>Quantity:{item[id].qty}</p>
                <p>TotalPrice :{item[id].qty * item[id].price}</p>
            </div>
        </div>
    )
};


export default HookFive;