import { ChangeEvent, useState } from "react";

export default function App() {
  const [billValue, setBillValue] = useState<number>(0);

  const handleBillValue = (e: ChangeEvent<HTMLInputElement>) => {
    const billAmount = parseInt(e.target.value);
    console.log(billAmount);
    setBillValue(billAmount);
  };

  return (
    <>
      <div className="App">
        <div className="bill">
          <p>
            How much was the bill?
            <input
              type="number"
              value={billValue}
              onChange={(e) => handleBillValue(e)}
            />
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
        {/* <p>{`You pay ${totalAmount} ($${bill} + $${averageTip} tip )`}</p> */}
        <button>Reset</button>
      </div>
    </>
  );
}
