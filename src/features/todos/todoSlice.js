import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get todo from API async
export const getTodosAsync = createAsyncThunk(
    "todos/getTodosAsync",
    async () => {
        const res = await fetch("http://localhost:7000/todos");
        if (res.ok) {
            const todos = await res.json();
            return { todos };
        }
    }
);
// add a todo async
export const addTodoAsync = createAsyncThunk(
    "todos/addTodoAsync",
    async (payload) => {
        const res = await fetch("http://localhost:7000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: payload.title }),
        });
        if (res.ok) {
            const todo = await res.json();
            return { todo };
        }
    }
);
// toggle complete async
export const toggleCompleteAsync = createAsyncThunk(
    "todos/completeTodyAsync",
    async (payload) => {
        const res = await fetch(`http://localhost:7000/todos/${payload.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ completed: payload.completed }),
        });
        if (res.ok) {
            const todo = await res.json();
            return { todo };
        }
    }
);

export const deleteItemAsync = createAsyncThunk(
    'todos/deleteItemAsync',
    async (payload) => {
        const res = await fetch(`http://localhost:7000/todos/${payload.id}`, {
            method: 'DELETE'
        });
        if(res.ok) {
            return { id: payload.id}
        }
    }
)

const initialState = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };
            state.push(todo);
        },

        toggleComplete: (state, action) => {
            const idx = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[idx].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
    extraReducers: {
        [getTodosAsync.fulfilled]: (state, action) => {
            return action.payload.todos;
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.push(action.payload.todo);
        },
        [toggleCompleteAsync.fulfilled]: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload.id);
            state[index].completed = action.payload.todo.completed
        },
        [deleteItemAsync.fulfilled]: (state, action)=> {
            return state.findIndex(todo => todo.id !== action.payload.id)
            
        }
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
