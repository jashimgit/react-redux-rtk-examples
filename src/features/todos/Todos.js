import React, {useEffect} from "react";
import Layout from "./../../components/layout/Layout";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TotalCompletedItems from './TotalCompletedItems';
import { getTodosAsync } from './todoSlice';
export default function Todos() {
    const todos = useSelector((state) => state.Todos);
    const dispatch = useDispatch()
    // console.log(todos);

    useEffect(() => {
        dispatch(getTodosAsync())
    },[dispatch])

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <h3 className="text-center">Todo List</h3>

                        <NavLink to="/add-todo" className="btn btn-primary">
                            add todo
                        </NavLink>
                        <TotalCompletedItems />
                    </div>
                    <div className="col-md-6 mx-auto mb-3 ">
                        <ul className="list-group">
                            {todos.map((todo) => (
                                <TodoItem data={todo} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
