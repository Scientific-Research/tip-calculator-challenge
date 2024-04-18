export default function App() {
  return (
    <div className="App">
      <div className="bill">
        <p>
          How much was the bill? <input type="text" />
        </p>
      </div>
      <div className="you">
        <p>How did you like the service?</p>
        <select name="" id="">
          <option value="dissatisfied">Dissatisfied(0%)</option>
          <option value="okay">It was okay(5%)</option>
          <option value="good">It was good(10%)</option>
          <option value="amazing">Absolutely amazing!(20%)</option>
        </select>
      </div>
      <div className="yourfriend">
        <p>How did your friend like the service?</p>
        <select name="" id="">
          <option value="dissatisfied">Dissatisfied(0%)</option>
          <option value="okay">It was okay(5%)</option>
          <option value="good">It was good(10%)</option>
          <option value="amazing">Absolutely amazing!(20%)</option>
        </select>
      </div>
      <button>Reset</button>
    </div>
  );
}
