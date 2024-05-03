import React, { useEffect, useState } from "react";

const HookFour = () => {
  useEffect(() => {
    getUser();
  }, [true]);

  const [user, setUser] = useState([]);

  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((alluser) => {
        setUser(alluser);
      });
  };

  const [details, setDetails] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const getDetails = (id) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
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
              <li className="list-group-item active">User List</li>
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
                User Details
              </div>
              <div className="card-body">
                <h5>
                  {details?.name} - {details.id}
                </h5>
                <p> UserName : {details.username ? details.username : "N/A"}</p>
                <p> E-Mail : {details.email} </p>

                <h5> Address </h5>
                <p> Street : {details.address.street} </p>
                <p> Suite : {details.address.suite} </p>
                <p> City : {details.address.city} </p>
                <p> Pincode : {details.address.zipcode} </p>

                <h5> Company </h5>
                <p> Website : {details.website} </p>
                <p> Phone : {details.phone} </p>
                <p> Company : {details.company.name} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HookFour;
