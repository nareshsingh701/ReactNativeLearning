const initialState = {
    data: [],
    loader: false
};
export const ankushScreenReducers = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_THE_USER_FULL_NAME":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}