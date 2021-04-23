import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/Actions';

const AddTask = ({handlefilter,filter}) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handleAdd = () =>{
        text.trim() ?
        dispatch(addTask({ id : Math.random , action : text , isDone : false}))
        : alert('plese fil the input')
        setText("")
    }
    return (
        <nav  >
            
                <div>
            <h1 style={{fontSize:40}} >To do app </h1>
            </div>
                <div>
            <input style={{fontSize:16}} placeholder="Add task" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd} style={{height:31 , marginLeft:10 , marginRight:10  }} >Add</button>
            <button onClick={handlefilter} style={{height:31}}>{filter? "Filer" : "All"}</button>
            </div>
            
        </nav>
    )
}

export default AddTask
