import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

    const AppLayout=()=> {
        return(
           <div>
             <Header/>
             <Body/>
             <Footer/>
           </div>

        )
    }

    
    const root=ReactDOM.createRoot(document.getElementById("root"));  //fetching div through id
    root.render(<AppLayout/>)   // render function 