const initialState = {
    list: []
}

const todoDataReducers = (state = initialState, action) => {
    switch (action.type) {
        case "AddTodoData":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DeleteTodoData":
            const newList = state.list.filter((elem) => elem.id !== action.payload.id);
            return {
                ...state,
                list: newList
            }
        case "UpdateTodo":
            const UpdatedList = state.list.map(Todo=> Todo.id === action.payload.updated_id ? { ...Todo, data: action.payload.updated_value} : Todo)
            return {
                ...state,
                list: UpdatedList
            }
        default: return state;
    }
}

export default todoDataReducers;





