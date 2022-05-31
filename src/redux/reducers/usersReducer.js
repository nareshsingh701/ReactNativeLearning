const initialState = {
    data: [],
    loader: false
};
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_USER_DETAILS":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}