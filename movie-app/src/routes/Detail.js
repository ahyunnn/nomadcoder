import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  // 주소에서 영화의 id를 가져오기
  const { id } = useParams();

  // 주소 정보 관리
  const [movie, setMovie] = useState([]);

  // 로딩 관리
  const [loading, setLoading] = useState(true);
  const getMovieDetail = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    const data = json.data.movie;
    setMovie(data);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <div>
          <h3>{movie.title}</h3>
          <img src={movie.medium_cover_image} alt="" />
          <p>{movie.description_full}</p>
          <p>rating : {movie.rating}</p>
          <p>year : {movie.year}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
