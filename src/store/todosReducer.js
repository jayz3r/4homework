const initialState = {
  items: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { items: [...state.items, action.payload] };
    case "REMOVE_TODO":
      return {items : state.items.filter((item) => item.id !== action.payload)};
    default:
      return state;
  }
};

export const addTodo = (payload) => ({ type: "ADD_TODO", payload });
export const removeTodo = (payload) => ({ type: "REMOVE_TODO", payload });
