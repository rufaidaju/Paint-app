import React, {useState} from 'react'

function Name (){
    const [name, setName] = useState('')
    return(
        <label className="projectName">
         <input
         value={name}
         placeholder = 'Untitle'
         onChange = {(e)=>{setName(e.target.value)}}
         onClick= {(e)=>{e.target.setSelectionRange(0, e.target.value.length)}}
         >

         </input>
        </label>
    )
}
export default Name;