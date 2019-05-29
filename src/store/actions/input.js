export const writeInput = text => ({
  type: "WRITE_INPUT",
  payload: { text }
});

export const cleanInput = () => ({
  type: "CLEAN_INPUT"
});
