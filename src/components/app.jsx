import React from "react"
import Header from "./header"
import Footer from "./footer"
import Note from "./note"
import Contact from "./contact"
import contact from "../contact"



 const App=()=>{
    return<div>
    
    
     <h3 className="heading">my contact list</h3>

{contact.map(pro=>{

    return <Contact
    key={pro.id}
    id={pro.id}
    name={pro.name}
    img={pro.imgURL}
    tel={pro.phone}
    email={pro.email}
    />
})}
     
     

<Footer /> 
     </div>
 }
 export default App