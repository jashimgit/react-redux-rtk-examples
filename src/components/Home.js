import React from "react";

import MovieList from "./MovieList";
import Layout from "./layout/Layout";

export default function Home() {
    return (
        <Layout>
            <MovieList />
        </Layout>
    );
}
