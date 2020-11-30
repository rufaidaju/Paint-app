import React, {useState} from 'react';

function PlayGround(){
    const [count,setCount] = useState(0);
    return(
        <div>
            {count} <br/>
            <button onClick={(incCount)=> incCount = setCount(count+1)}>+</button>
            <button onClick={(incCount)=> incCount = setCount(count-1)}>-</button>
        </div>
    )
}
export default PlayGround;