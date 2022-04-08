import React from 'react';

import {useTodos} from './useTodos';
import {TodoHeader} from '../TodoHeader';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {TodosError} from '../TodosError';
import {TodosLoading} from '../TodosLoading';
import {EmptyTodos} from '../EmptyTodos';
import {TodoForm} from '../TodoForm';
import {CreateTodoButton} from '../CreateTodoButton';
import {Modal} from '../Modal';
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";

function App() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
    } = useTodos();

    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>
            <TodoList
                error = {error}
                loading = {loading}
                totalTodos = {totalTodos}
                searchedTodos = {searchedTodos}
                searchText = {searchValue}
                onError={() => <TodosError/>}
                onLoading={() => <TodosLoading/>}
                onEmptyTodos={() => <EmptyTodos/>}
                onEmptySearchResults={(searchText2) => <p> No hay resultados para <b>"{searchText2}"</b> </p>}
            >
                {
                    (todo) => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                        />
                    )
                }
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export default App;
