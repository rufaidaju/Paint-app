import React, {useState} from 'react'

function Name (){
    const [name, setName] = useState('')
    return(
        <label className="projectName">
         <input
         value={name}
         placeholder = 'Untitle'>
         onChange = {}
         onClick = {}

         </input>
        </label>
    )
}
export default Name;