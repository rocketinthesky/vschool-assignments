export default function(state = null, action) {
  switch(action.type) {
  case "ENTRY_SELECTED":
    return action.payload;
  }

  return state;
}
