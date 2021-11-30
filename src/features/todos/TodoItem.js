/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, toggleCompleteAsync, deleteTodo , deleteItemAsync} from "./todoSlice";

export default function TodoItem({ data }) {
    const { id, title, completed } = data;
    const dispatch = useDispatch();
    // const handleCheckboxClick = () => {
    //     dispatch(toggleComplete({ id, completed: !completed }));
    // };
    const handleCheckboxClick = () => {
        dispatch(toggleCompleteAsync({ id, completed: !completed }));
    };
    // const handleDeleteClick = () => {
    //     dispatch(deleteTodo({ id }));
    // };

    const handleDeleteClick = () => {
        dispatch(deleteItemAsync({id}))
    }

    return (
        <li
            className={`list-group-item ${
                completed && "list-group-item-success"
            }`}
        >
            <div className="d-flex justify-content-between form-check">
                <span className="d-flex align-items-center">
                    <input
                        type="checkbox"
                        className="mr-3 form-check-input"
                        onClick={handleCheckboxClick}
                        checked={completed}
                    ></input>
                    <label className="form-check-label">{title}</label>
                </span>
                <button onClick={handleDeleteClick} className="btn btn-danger">
                    Delete
                </button>
            </div>
        </li>
    );
}
