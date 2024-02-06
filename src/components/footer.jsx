import React from "react"
 const Footer=()=>{
    const month=new Date().getMonth()+1
    const day=new Date().getDate()
    const year=new Date().getFullYear()
    const minutes=new Date().getMinutes()
    const hour=new Date().getHours()
    const seconds=new Date().getSeconds()
    const dis=day +"-"+month+"-"+year+"   "+hour+":"+minutes+":"+seconds+"."
    return  <footer>
        <h1>Copyright © { dis}</h1>

        </footer>
            
    
 }
 export default Footer