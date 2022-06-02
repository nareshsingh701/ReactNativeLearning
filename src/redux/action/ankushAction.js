export const updateAnkushFields = (stands, value) => ({
    type: "UPDATE_THE_USER_NAME",
    payload: { [stands]: value }
});