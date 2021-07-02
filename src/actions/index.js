export const addToDo = (inputData)=>{
    return{
        type : "ADD_TODO",
        payload : {
            id : new Date().getTime().toString(),
            data:inputData
        }
    }
}

export const deleteToDo = (id)=>{
    return{
        type : "DELETE_TODO",
        id
    }
}

export const removeToDo = ()=>{
    return{
        type : "REMOVE_TODO"
    }
}

export const editToDo = ()=>{
    return{
        type : "EDIT_TODO"
    }
}