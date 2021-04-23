import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../redux/Actions'
import EditTask from './EditTask'

const Task = ({tasks}) => {
    const dispatch = useDispatch()
    return (
        <div className="task" >
        <div className="tasks">
            
            <h3 className="action" id={tasks.isDone ? "done" : ""} >{tasks.action}</h3>
            <div className="tasksb" >
            <button onClick={() => dispatch(completeTask(tasks.id))} > {tasks.isDone ? "Undo" : "Complete"} </button>
            <EditTask oldTask = {tasks} />
            <button onClick={() => dispatch(deleteTask(tasks.id))}>Delete</button>
            </div>
        </div>
        </div>
    )
}

export default Task
