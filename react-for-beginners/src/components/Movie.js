import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Movie(props) {
    return  (
        <div >
            <img src={props.coverImg} />
            <h2>
                <Link to="/movie">{props.title}</Link>
            </h2>
            <p>{props.summary}</p>
            <ul>
                {props.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

/*
function Movie({ medium_cover_image, title, summary, genres }) {
    return  (
        <div >
            <img src={medium_cover_image} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}
*/

export default Movie;