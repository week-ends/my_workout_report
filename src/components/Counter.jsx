import React from "react";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

function Counter({
  number,
  diff,
  unit,
  onIncrease,
  onDecrease,
  onSetNumber,
  onSetDiff
}) {
  const onChangeNumber = e => {
    e.target.value
      ? onSetNumber(parseFloat(e.target.value, 10))
      : (e.target.value = 0);
  };

  const onChangeDiff = e => {
    e.target.value
      ? onSetDiff(parseFloat(e.target.value, 10))
      : (e.target.value = diff);
  };
  const selfSelect = e => {
    e.target.select();
  };
  return (
    <div className="Setter">
      <div>
        설정 값
        <input
          type="number"
          placeholder="Set your the smallest weight"
          value={diff}
          min="1.25"
          onChange={onChangeDiff}
          onClick={selfSelect}
        />
        <span className="unit">{unit}</span>
      </div>
      <div className="Button-Count-Up" onClick={onIncrease}>
        <MdArrowUpward />
      </div>
      <div>
        <input
          type="number"
          placeholder="Input your Weight"
          value={number}
          min="1"
          onChange={onChangeNumber}
          onClick={selfSelect}
        />
        <span className="unit">{unit}</span>
      </div>
      <div className="Button-Count-Down" onClick={onDecrease}>
        <MdArrowDownward />
      </div>
    </div>
  );
}

export default Counter;
