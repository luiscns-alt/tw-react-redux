import { TodoService } from '../services/TodoService';

export const TODO_LIST = 'TODO_LIST';
export const TODO_CREATE = 'TODO_CREATE';
export const TODO_UPDATE = 'TODO_UPDATE';
export const TODO_REMOVE = 'TODO_REMOVE';
export const TODO_CLEAR = 'TODO_CLEAR';

export const list = () => {
    return async (dispatch) => {
        const todoList = await TodoService.list();
        dispatch({
            type: TODO_LIST,
            todoList,
        });
    };
};

export const create = (description) => {
    return async (dispatch) => {
        const newItem = await TodoService.create({
            description,
            isChecked: false,
        });
        dispatch({
            type: TODO_CREATE,
            newItem,
        });
    };
};
export const update = (item) => {
    return {
        type: TODO_UPDATE,
        item,
    };
};
export const remove = (id) => {
    return {
        type: TODO_REMOVE,
        id,
    };
};
export const clear = () => {
    return {
        type: TODO_CLEAR,
    };
};
