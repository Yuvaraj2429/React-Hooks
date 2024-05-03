import React, {useState} from "react";
import ItemList from "./Hook9";

const Myitem =() =>{
    const [item, setItem] = useState([
        {
            name:"mango",
            pic:"Mango.jpeg",
            oprice:"300",
            nprice:"200",
            dt:"Good Buy It",
        },
        {name:"Milk", pic:"Milk.jpeg",oprice:40, nprice:48, dt:"Good Tasty"},
        {
            name:"Grape",
            pic:"Grape.jpeg",
            oprice:"90",
            nprice:"70",
            dt:"Pure Healthy and Good",
        },
        {
            name:"Rice",
            pic:"Rice.jpeg",
            oprice:"1200",
            nprice:"150",
            dt:"Nature organic",
        },

    ]);
    return(
        <div className="container mt-3 text center">
            <div className="row">
                <div className="col-lg-12">
                    <h1> React Js Props Using Hooks Example</h1>
                </div>
            </div>
            <div className="row mt-3">
                <ItemList
                itemname="Apple"
                 photo="Apple.jpeg"
                oldprice = "200"
                newprice= "150"
                details="Good & Tasty Apple"
                />
                {item.map((iteminfo, index)=>{
                    return(
                        <ItemList
                        itemname={iteminfo.name}
                        photo={iteminfo.pic}
                        oldprice={iteminfo.oprice}
                        newprice={iteminfo.nprice}
                        details={iteminfo.dt}
                        />
                    );
                })
            }
            </div>
        </div>
    );
};
export default Myitem;