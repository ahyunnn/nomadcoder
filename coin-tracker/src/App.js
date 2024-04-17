import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json)
      .then((json) => console.log(json));
  }, []);
  return (
    <div>
      <h3>Coin tracker</h3>
      {loading ? <p>loading...</p> : null}
    </div>
  );
}

export default App;
