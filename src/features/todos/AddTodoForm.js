import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch } from 'react-redux';
import { addTodo, addTodoAsync } from './todoSlice';

export default function AddTodoForm() {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(title) {
            dispatch(addTodoAsync({
                title: title
            }))
        }
        setTitle('')
    };

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <form onSubmit={onSubmit} className=" mt-3 mb-3">
                            <div className="form-control">
                                <label>Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary mb-3">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
