
const initialState = {
    data: [
        'name :naresh',
        'age:19',
        'address:khaga'
    ],
    loader: false
};
export const postReducer = (state = initialState, counter) => {
    switch (counter.type) {
        case "NAME_THA_DETAILS":
            return { ...state, ...counter.payload };
        default:
            return state;
    }
}