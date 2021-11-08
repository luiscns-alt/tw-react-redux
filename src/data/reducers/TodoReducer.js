import * as TodoConstants from "../actions/TodoActions";

const TodoReducer = (todoList = [], action) => {
  switch (action.type) {
    case TodoConstants.TODO_CREATE:
      return [
        ...todoList,
        { id: Date.now(), isChecked: false, description: action.description },
      ];
    case TodoConstants.TODO_REMOVE:
      //return todoList.filter(item => item.id !== action.id);
      const itemIndex = todoList.findIndex((item) => item.id === action.id);
      return [
        ...todoList.slice(0, itemIndex),
        ...todoList.slice(itemIndex + 1),
      ];
    default:
      return todoList;
  }
};

export default TodoReducer;
