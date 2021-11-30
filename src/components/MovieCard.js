import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movieSlice";

export default function MovieCard() {
    const movies = useSelector(getAllMovies);
    
    const AllMovies = movies.Search;

    return (
        <>
            {AllMovies.map((movie, idx) => (
                <div className="col-md-4" key={idx}>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img
                                    src={movie.Poster}
                                    className="img-fluid rounded-start img"
                                    alt={movie.Title}
                                />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">{ movie.Title }</h5>
                                    <p> Year : {movie.Year}</p>
                                    <p> ImdbId : {movie.imdbID}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
