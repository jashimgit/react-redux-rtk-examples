import { configureStore } from '@reduxjs/toolkit'

import movieReducer from '../features/movieSlice';
import todoReducer from '../features/todos/todoSlice';

const store = configureStore({
    reducer: {
        AllMovies: movieReducer,
        Todos: todoReducer,
    }
})

export default store;