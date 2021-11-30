import React from "react";
import { useSelector } from "react-redux";

export default function TotalCompletedItems() {
    const todos = useSelector((state) =>
        state.Todos.filter((todo) => todo.completed === true)
    );
    return <h4 className="mt-3"> Total Complete items: { todos.length}</h4>;
}
