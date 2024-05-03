import React from "react";
const ItemList =(props)=>{
    return(
        <div className="col-lg-4 mb-3 text center"> 
            <div className="p-40bg-light rounded">
                <img src={props.photo} className="img-fluid rounded"/>
                <p>{props.details}</p>
                <del className="text danger ms-2 ">Rs.{props.oldprice}</del>
                <ins className="text-success">Rs.{props.newprice}</ins>
                <p className="text center mt-2">
                    <button className="btn btn-danger btn-sm">Buy Now</button>
                </p>
            </div>
            
            
        </div>
    )
}
export default ItemList;