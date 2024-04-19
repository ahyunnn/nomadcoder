import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((response) => response.json())
      .then((json) => {
        setMovies(json);
        setLoading(false);
      });
  }, []);
  console.log(movies);

  return <div>{loading ? <h3>Loading...</h3> : null}</div>;
}

export default App;
