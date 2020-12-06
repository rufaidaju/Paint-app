import React, {useState , useEffect} from 'react';
import randomcolor from 'randomcolor';

function Playground(){
    const [count,setCount] = useState(0);
    const [color,setColor] = useState('red');
    useEffect(()=>{
        setColor(randomcolor())
    },[count])

    return(
        <div style={{borderTop : `10px solid ${color}`}}>
            {count} <br/>
            <button onClick={(incCount)=> incCount = setCount(count+1)}>+</button>
            <button onClick={(incCount)=> incCount = setCount(count-1)}>-</button>
        
        </div>
    )
}
export default Playground;