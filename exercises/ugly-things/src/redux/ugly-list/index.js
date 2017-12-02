export function addUgly(item) {
  return {
    type: "ADD_UGLY",
    item
  }
}

export default function reducer(prevState = [], action) {
  switch(action.type) {
    case "ADD_UGLY":
      return [...prevState, action.item]
    default:
      return prevState;
  }
}
