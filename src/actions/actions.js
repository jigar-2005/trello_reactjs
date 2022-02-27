export const AddTodo = (data) => {
    return {
        type: "AddTodoData",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const DeleteTodoData = (id) => {
    return {
        type: "DeleteTodoData",
        payload: {
            id: id
        }
    }
}

export const UpdateTodo = (updated_id, updated_value) => {
    return {
        type: "UpdateTodo",
        payload: {
            updated_id: updated_id,
            updated_value: updated_value
        }
    }
}





