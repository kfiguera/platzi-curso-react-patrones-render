import React from 'react';
import {useLocalStorage} from './useLocalStorage';
import {v4 as uuidv4} from 'uuid';

function useTodos(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItem: sincronizeTodos,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            id: uuidv4(),
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };

    const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return ({
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        sincronizeTodos,
    });
}

export {useTodos};
