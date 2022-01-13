
const AppReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };

        case "update":
            return {
                ...state,
                transactions: state.transactions.map((transaction) => {
                    return transaction.id === state.editingId ? action.payload : transaction;
                }),
                editingId: null
            }

        case "delete":
            return {
                ...state,
                transactions: state.transactions.filter((t) => {return t.id !== action.payload}) 
            };

        case "textInput":
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };

        case "choose": 
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }

        default:
            return state
    }
}

export default AppReducer
