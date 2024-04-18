import { useState } from "react";

export default function App() {
  return (
    <>
      <div>
        <TipCalculator />
      </div>
    </>
  );
}
const TipCalculator = () => {
  const [billValue, setBillValue] = useState<number>(0);
  // const [yourSatisfaction, setYourSatisfaction] = useState("dissatisfied");
  const [yourSatisfaction, setYourSatisfaction] = useState(0);
  // const [friendSatisfaction, setFriendSatisfaction] = useState("dissatisfied");
  const [friendSatisfaction, setFriendSatisfaction] = useState(0);

  // NOTE: every time when we set a new value in the input fields, this value will be set in the state variables and therefore, the new values will be calculated! In my calculations, i used the name of every selection like "It was good" and not its value => 10%, that's why i had to use switch-case and get the corresponding value for every selection. But now, we use the corresponding value for every selection directly using state variable!
  const tip = billValue * ((yourSatisfaction + friendSatisfaction) / 2 / 100);

  return (
    <>
      <BillInput billValue={billValue} onSetBillValue={setBillValue} />
      <SelectPercentage
        satisfactionPercentage={yourSatisfaction}
        onSatisfactionPercentage={setYourSatisfaction}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        satisfactionPercentage={friendSatisfaction}
        onSatisfactionPercentage={setFriendSatisfaction}
      >
        How did your friend like the service?
      </SelectPercentage>
      <Output billValue={billValue} tip={tip} />
      <Reset
        setBillValue={setBillValue}
        setYourSatisfaction={setYourSatisfaction}
        setFriendSatisfaction={setFriendSatisfaction}
      />
    </>
  );
};

const BillInput = ({
  billValue,
  onSetBillValue,
}: {
  billValue: any;
  onSetBillValue: any;
}) => {
  return (
    <>
      <div className="bill">
        <label htmlFor="">How much was the bill?</label>
        <input
          type="number"
          placeholder="Bill value ..."
          value={billValue}
          onChange={(e) => onSetBillValue(Number(e.target.value))}
        />
      </div>
    </>
  );
};

const SelectPercentage = ({
  children,
  satisfactionPercentage,
  onSatisfactionPercentage,
}: {
  children: any;
  satisfactionPercentage: any;
  onSatisfactionPercentage: any;
}) => {
  return (
    <div className="you">
      <label>{children}</label>
      <select
        value={satisfactionPercentage}
        onChange={(e) => onSatisfactionPercentage(Number(e.target.value))}
      >
        {/* <option value="dissatisfied">Dissatisfied(0%)</option> */}
        <option value="0">Dissatisfied(0%)</option>
        {/* <option value="okay">It was okay(5%)</option> */}
        <option value="5">It was okay(5%)</option>
        {/* <option value="good">It was good(10%)</option> */}
        <option value="10">It was good(10%)</option>
        {/* <option value="amazing">Absolutely amazing!(20%)</option> */}
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
};

const Output = ({ billValue, tip }: { billValue: any; tip: any }) => {
  return (
    <h3>
      You pay ${billValue + tip} (${billValue} + ${tip} tip)
    </h3>
  );
};

const Reset = ({
  setBillValue,
  setYourSatisfaction,
  setFriendSatisfaction,
}: {
  setBillValue: any;
  setYourSatisfaction: any;
  setFriendSatisfaction: any;
}) => {
  // Reset the values
  const handleReset = () => {
    setBillValue(() => 0);
    setYourSatisfaction(() => 0);
    setFriendSatisfaction(() => 0);
  };

  return <button onClick={handleReset}>Reset</button>;
};
