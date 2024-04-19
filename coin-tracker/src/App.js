import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json);
      });
  }, []);

  return (
    <div>
      <h3>Coin tracker</h3>
      {loading ? (
        <p>loading...</p>
      ) : (
        <select>
          {coins.map((item) => (
            <option>
              {item.name} {item.symbol} ${item.quotes.USD.price.toFixed(2)} / How many coins can I get? with $20 :{" "}
              {Math.round(20 / item.quotes.USD.price.toFixed(2))}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
