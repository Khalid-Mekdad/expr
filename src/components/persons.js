import React from 'react';


const personCards = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>

            <input type="text" onChange={props.changeName} value={props.name}/>
        </div>
    )
}

export default personCards