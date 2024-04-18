import { ChangeEvent, useState } from "react";

export default function App() {
  let yourSatisfactionResult = 0;
  let friendSatisfactionResult = 0;
  let calculatedYourSatisfaction = 0;
  let calculatedFriendSatisfaction = 0;
  let totalAmount = 0;
  let averageTip = 0;

  const [billValue, setBillValue] = useState<number>(0);
  const [yourSatisfaction, setYourSatisfaction] = useState("dissatisfied");
  const [friendSatisfaction, setFriendSatisfaction] = useState("dissatisfied");

  const handleBillValue = (e: ChangeEvent<HTMLInputElement>) => {
    const billAmount = parseInt(e.target.value);
    setBillValue(() => billAmount);
  };

  // const handleYourSatisfaction = (e: ChangeEvent<HTMLSelectElement>) => {
  const handleYourSatisfaction = () => {
    // const yourSatisfaction = e.target.value;
    // setYourSatisfaction(() => yourSatisfaction);

    switch (yourSatisfaction) {
      case "dissatisfied":
        yourSatisfactionResult = 0 * billValue;
        break;
      case "okay":
        yourSatisfactionResult = 0.05 * billValue;
        break;
      case "good":
        yourSatisfactionResult = 0.1 * billValue;
        break;
      case "amazing":
        yourSatisfactionResult = 0.2 * billValue;
        break;
    }
    return yourSatisfactionResult;
  };

  // const handleFriendSatisfaction = (e: ChangeEvent<HTMLSelectElement>) => {
  const handleFriendSatisfaction = () => {
    // const friendSatisfaction = e.target.value;
    // setFriendSatisfaction(() => friendSatisfaction);

    switch (friendSatisfaction) {
      case "dissatisfied":
        friendSatisfactionResult = 0 * billValue;
        break;
      case "okay":
        friendSatisfactionResult = 0.05 * billValue;
        break;
      case "good":
        friendSatisfactionResult = 0.1 * billValue;
        break;
      case "amazing":
        friendSatisfactionResult = 0.2 * billValue;
        break;
    }
    return friendSatisfactionResult;
  };

  // call the both functions
  calculatedYourSatisfaction = handleYourSatisfaction();
  calculatedFriendSatisfaction = handleFriendSatisfaction();

  averageTip = Number((
    (calculatedYourSatisfaction + calculatedFriendSatisfaction) /
    2
  ).toFixed(2));
  totalAmount = billValue + averageTip;

  // Reset the values
  const handleReset = () => {
    setBillValue(() => 0);
    setYourSatisfaction(() => "");
    setFriendSatisfaction(() => "");
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
          <select
            name=""
            id=""
            value={yourSatisfaction}
            // onChange={(e) => handleYourSatisfaction(e)}
            onChange={(e) => setYourSatisfaction(e.target.value)}
          >
            <option value="dissatisfied">Dissatisfied(0%)</option>
            <option value="okay">It was okay(5%)</option>
            <option value="good">It was good(10%)</option>
            <option value="amazing">Absolutely amazing!(20%)</option>
          </select>
        </div>
        <div className="yourfriend">
          <p>How did your friend like the service?</p>
          <select
            name=""
            id=""
            value={friendSatisfaction}
            // onChange={(e) => handleFriendSatisfaction(e)}
            onChange={(e) => setFriendSatisfaction(e.target.value)}
          >
            <option value="dissatisfied">Dissatisfied(0%)</option>
            <option value="okay">It was okay(5%)</option>
            <option value="good">It was good(10%)</option>
            <option value="amazing">Absolutely amazing!(20%)</option>
          </select>
        </div>
        <p>{`You pay $${totalAmount} ($${billValue} + $${averageTip} tip )`}</p>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
