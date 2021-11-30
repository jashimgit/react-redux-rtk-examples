/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import movieApi from "../API/movieApi";
// import demoImage from "../img/demo.jpg";
import { useDispatch } from "react-redux";
import { addMovies } from "../features/movieSlice";
import MovieCard from "./MovieCard";
import { getAllMovies } from "../features/movieSlice";

export default function MovieList() {
    
    const dispatch = useDispatch();
    const KEY = "200c0517";
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi
                .get(`?apikey=${KEY}&s=harry&type=movie`)
                .catch((err) => console.log(err));
            dispatch(addMovies(response.data));
        };
        fetchMovies();
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>All Movies lists</h1>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        {<MovieCard />}
                    </div>
                </div>
            </div>
        </div>
    );
}
