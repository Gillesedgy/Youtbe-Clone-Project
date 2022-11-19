import './ToggleSwitch.css'
import {useEffect, useState} from "react"
function ToggleSwitch() {
    const [theme, setTheme]=useState('black')
const handleTheme =(theme)=>{
    if(theme==="black"){
        setTheme("white")
    } else{
          setTheme("black")
    }
}
useEffect(()=>{
document.body.style.backgroundColor = theme
}, [theme])
  return (
    <div className="switch__container">

{/* button  basic for now just for functionality */}

        <div className ='toggle__switch'>
    <label>
        <input  onChange={()=>{handleTheme(theme)}}  type = 'checkbox' style={{display: 'none'}}/>
        <span className ='slider'></span>
    </label>
   
</div>
</div>
  )
}

export default ToggleSwitch