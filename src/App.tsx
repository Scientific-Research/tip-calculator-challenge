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
  const [billValue, setBillValue] = useState<string | number>("");
  const [yourSatisfaction, setYourSatisfaction] = useState(0);
  const [friendSatisfaction, setFriendSatisfaction] = useState(0);

  // NOTE: every time when we set a new value in the input fields, this value will be set in the state variables and therefore, the new values will be calculated! In my calculations, i used the name of every selection like "It was good" and not its value => 10%, that's why i had to use switch-case and get the corresponding value for every selection. But now, we use the corresponding value for every selection directly using state variable!
  let tip =
    Number(billValue) * ((yourSatisfaction + friendSatisfaction) / 2 / 100);

  tip = Number(tip.toFixed(2)); // to fix the output to two digits!

  // NOTE: we have four components here and one of them => SelectPercentage is a reusable component!
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
        billValue={billValue}
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
  billValue: string | number;
  onSetBillValue: (id: number | string) => void;
}) => {
  return (
    <>
      <div className="bill">
        <label htmlFor="">How much was the bill?</label>
        <input
          type="number"
          placeholder="Bill value"
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
  children: React.ReactNode;
  satisfactionPercentage: number;
  onSatisfactionPercentage: (id: number) => void;
}) => {
  return (
    <div className="you">
      <label>{children}</label>
      <select
        value={satisfactionPercentage}
        onChange={(e) => onSatisfactionPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
};

const Output = ({
  billValue,
  tip,
}: {
  billValue: number | string;
  tip: number;
}) => {
  return (
    billValue && (
      <h3>
        You pay ${Number(billValue) + tip} (${billValue} + ${tip} tip)
      </h3>
    )
  );
};

const Reset = ({
  billValue,
  setBillValue,
  setYourSatisfaction,
  setFriendSatisfaction,
}: {
  billValue: string | number;
  setBillValue: (id: string) => void;
  setYourSatisfaction: (id: number) => void;
  setFriendSatisfaction: (id: number) => void;
}) => {
  // Reset the values
  const handleReset = () => {
    setBillValue("");
    setYourSatisfaction(0);
    setFriendSatisfaction(0);
  };

  return billValue && <button onClick={handleReset}>Reset</button>;
};
