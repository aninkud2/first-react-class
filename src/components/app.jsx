import React from "react"
import Header from "./header"
import Footer from "./footer"
import Note from "./note"
import Contact from "./contact"
import contact from "../contact"



 const App=()=>{
    return<div>
     <Header />
     <Note/>
    
     <h3>my contact list</h3>
     
{contact.map((contact)=>{

    return <Contact
    name={contact.name}
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
    />
})}
     
     

<Footer /> 
     </div>
 }
 export default App