import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Movie({ key, coverImg, title, summary, genres }) {
  return (
    <div key={key}>
      <img src={coverImg} alt={title} />
      <h3>
        <Link to="/movie">{title}</Link>
      </h3>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
