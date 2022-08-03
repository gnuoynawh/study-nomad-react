import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState();
    const { id } = useParams();

    const getMovies = async() => {
        const json = await(
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovies(json.data.movie);
        setLoading(false);
    }
    
    useEffect(() => {
        getMovies();
    }, []);
    
    return (
        <div>
            <h1>Detail!!!</h1>
            {
                loading ? (
                    <strong>"Loading..."</strong>
                ) : (
                    <div>
                        <Movie 
                            key={movie.id}
                            id={movie.id}
                            medium_cover_image={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    </div>
                )
            }    
        </div>
    );
}

export default Detail;