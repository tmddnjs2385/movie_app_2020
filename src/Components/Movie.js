import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link className="movie" to={{ pathname: "/detail", state: { year, title, summary, poster, genres } }} style={{ textDecoration: 'none' }}>

            <div >
                <img src={poster} alt={title} title={title}></img>

                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>

                    <ul className="movie__genres">{genres.map((genre, index) => (<li key={index} className="genres__genre">{genre}</li>))}</ul>
                    <p className="movie__summary">{summary.slice(0, 200)}...</p>
                </div>
            </div>

        </Link>
    )
}

Movie.propTypes = {

    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired// 이거 잘 이해가 되지 않는다.
}

export default Movie;