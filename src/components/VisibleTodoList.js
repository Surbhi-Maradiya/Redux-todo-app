import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, todolistFilters } from '../actions/index';

const getTodoList = (todos, filter) => {
    switch (filter) {
        case todolistFilters.SHOW_ALL:
            return todos;
        case todolistFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case todolistFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        default:
            throw new Error('unknown filter' + filter);
    }
}

const mapStateToProps = state => {
    console.log("1", state);
    return ({
        todos: getTodoList(state.todos, state.todolistFilter)
    })
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
}

const VisibleTodoList = (props) => {
    console.log(props);
    return (
        <div>
            <ul>
                {
                    props.todos.map((todo) => (
                        <li onClick={() => props.toggleTodo(todo.id)} key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);