import React from 'react';
import './App.css';


const Todo = (props) => {

    
    return (
        <div>
            <div className='todo_style'>
            <i class="fa-solid fa-pen-fancy" onClick={()=> {
                props.eSelect(props.id)
            }}/>
            <i class="fa-solid fa-trash" onClick={()=>{
                props.dSelect(props.id)
            }} />

                <li>{props.text} </li>

            </div>
        </div>
    )
}

export default Todo;
