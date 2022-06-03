export const updateAnkushScreenFields = (stands, value) => ({
    type: "UPDATE_THE_USER_FULL_NAME",
    payload: { [stands]: value }
});