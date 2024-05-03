import React from "react";
import { Link } from "react-router-dom";


const Header =() =>{
    return (<>
    
    <nav id="mynav">
      <Link to ="/" Classname = "mylink">
        Home
      </Link>
      <Link to="/Hook1" className="mylink">
        Hook-1
      </Link>
      <Link to="/Hook2" className="mylink">
        Hook-2
      </Link>
      <Link to="/Hook3" className="mylink">
        Hook-3
      </Link>
      <Link to="/Hook4/123" className="mylink">
        Hook-4
      </Link>
      <Link to="/Hook5/1" className="mylink">
        Hook-5
      </Link>
      <Link to="/Hook6" className="mylink">
        Hook-6
      </Link>
      <Link to="/MyBook" className="mylink">
        My-Book
      </Link>
      <Link to="/CartTable" className="mylink">
        CartTable
      </Link>
      <Link to="/Hook8" className="mylink">
        Hook-8
      </Link>
      <Link to="/Dropdown" className="mylink">
        Dropdown
      </Link>
    </nav>
      
    </>)
}
export default Header 