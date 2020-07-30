import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

const AddTodo = ({ dispatch }) => {
    let myInput = null;
    const addTask = (e) => {
        e.preventDefault();
        if (!myInput.value.trim()) return;
        dispatch(addTodo(myInput.value));
        myInput.value = '';
    }
    return (
        <div>
            <form onSubmit={addTask}>
                <input ref={node => myInput = node} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}
export default connect()(AddTodo);