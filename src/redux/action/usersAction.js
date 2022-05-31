export const updateUserFields = (key, value) => ({
    type: "UPDATE_USER_DETAILS",
    payload: { [key]: value }
});