import { useState } from "react";
function MinutesToHours() {
  // 상태관리
  const [amount, setAmount] = useState(0);
  const [flip, setFlip] = useState(false);
  // 함수관리
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const flipped = () => {
    reset();
    setFlip((current) => !current);
  };
  return (
    <div>
      <div>
        <label for="minutes">Minutes</label>
        <input
          value={flip ? amount * 60 : amount}
          id="minutes"
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flip}
        />
      </div>
      <div>
        <label for="hours">Hours</label>
        <input
          value={flip ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          onChange={onChange}
          disabled={!flip}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={flipped}>Flip</button>
    </div>
  );
}
function KMtoMiles() {
  // 상태관리
  const [amount, setAmount] = useState(0);
  const [flip, setFlip] = useState(false);
  // 함수관리
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const flipped = () => {
    reset();
    setFlip((current) => !current);
  };
  return (
    <div>
      <div>
        <label for="km">KM</label>
        <input
          value={flip ? Math.round(amount / 0.62) : amount}
          id="km"
          placeholder="km"
          type="number"
          onChange={onChange}
          disabled={flip}
        />
      </div>
      <div>
        <label for="miles">Miles</label>
        <input
          value={flip ? amount : amount * 0.62}
          id="miles"
          placeholder="miles"
          type="number"
          onChange={onChange}
          disabled={!flip}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={flipped}>Flip</button>
    </div>
  );
}
function App() {
  const [index, setIndex] = useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select onClick={onSelect}>
        <option value="xx">Select the units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">KM & Miles</option>
      </select>
      <hr />
      {index === "xx" ? "Please Select Your Units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KMtoMiles /> : null}
    </div>
  );
}

export default App;
