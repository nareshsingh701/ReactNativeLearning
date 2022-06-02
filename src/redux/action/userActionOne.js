export const updateSugreevFields = (key, value) => ({
    type: "USER_UPDATE_DETAILS",
    payload: { [key]: value }
})