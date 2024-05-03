import React, { useEffect, useState } from "react";

const Cart = () => {
  useEffect(() => {
    getUser();
  }, [true]);

  const [user, setUser] = useState([]);

  const getUser = () => {
    fetch(" https://dummyjson.com/carts")
      .then((response) => response.json())
      .then((alluser) => {
        setUser(alluser);
      });
  };

  const [details, setDetails] = useState({
  
      
        "id": 1,
        "products": [
          {
            "id": "",
            "title": "",
            "price": "",
            "quantity": "",
            "total": "",
            "discountPercentage": "",
            "discountedPrice": "",
          },
          {
            "id": "",
            "title": "",
            "price": "",
            "quantity":"",
            "total": "",
            "discountPercentage":"",
            "discountedPrice": "",
          },
          {
            "id": "",
            "title": "Oil Free Moisturizer 100ml",
            "price": "",
            "quantity":"",
            "total": "",
            "discountPercentage": "",
            "discountedPrice": "",
          },
          {
            "id": "",
            "title": "",
            "price": "",
            "quantity": "",
            "total": "",
            "discountPercentage": "",
            "discountedPrice": "",
          },
          {
            "id": "",
            "title": "",
            "price": "",
            "quantity":"",
            "total": "",
            "discountPercentage": "",
            "discountedPrice": "",
          }
        ],
        "total": "",
        "discountedTotal": "",
        "userId": "",
        "totalProducts": "",
        "totalQuantity": "",
      },
  );

  const getDetails = (id) => {
    fetch(" https://dummyjson.com/carts" + id)
      .then((response) => response.json())
      .then((allUser) => {
        setDetails(allUser);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ul className="list-group">
              <li className="list-group-item active">Product List</li>
              {user.map((info, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={getDetails.bind(this, info.id)}
                    >
                      {info.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-header bg-danger text-white">
                Product details
              
              </div>
              <div className="card-body">
                <h5>
                  {details?.name} - {details.id}
                </h5>
              
              
                <p> title : {details.products.title} </p>
                <p> price : {details.products.price} </p>
                <p> quantity : {details.products.quantity} </p>
                <p> total : {details.products.total} </p>
                <p> total : {details.products.discountPercentage} </p>
                <p> total : {details.products.discountedPrice} </p>
              
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
