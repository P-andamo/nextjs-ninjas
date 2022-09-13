import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";

const Layout = ({children, test}) => {

    console.log("child:", React.Children.count(children));
    console.log("Simple test apram: ", test);
    return (         <div className="content">
            <Navbar/>
                {children }
            <Footer/>
        </div>
     );
}
 
export default Layout;