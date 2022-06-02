const initialState = {
    data: [],
    loader: false
};
export const userReducerOne = (state = initialState, action) => {
    switch (action.type) {
        case "USER_UPDATE_DETAILS":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}