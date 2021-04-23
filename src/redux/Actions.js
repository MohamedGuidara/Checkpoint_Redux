import { ADD_TASK, COMPLITE_TASK, DELETE_TASK, EDIT_TASK } from "./ActionTypes"

export const addTask = (newTask) => {
    return {
        type : ADD_TASK,
        payload: newTask ,
    }
}

export const deleteTask = (id) => {
    return {
        type : DELETE_TASK,
        payload: id ,
    }
}

export const completeTask = (id) => {
    return {
        type : COMPLITE_TASK,
        payload: id ,
    }
}

export const editTask = (editeTask) => {
    return {
        type : EDIT_TASK,
        payload: editeTask ,  //id , action , isDone:old
    }
}