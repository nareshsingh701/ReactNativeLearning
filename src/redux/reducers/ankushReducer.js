const initialState = {
    data: [],
    loader: false
};
export const ankushReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_THE_USER_NAME":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}