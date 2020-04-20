import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease, setDiff, setNumber } from '../store/actions';
import './CounterContainer.scss';

function CounterContainer() {
  const { number, diff, unit } = useSelector(
    state => ({
      number: state.counter.number,
      diff: state.counter.diff,
      unit: state.counter.unit
    }),
    shallowEqual
  );
  //디스패치
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetNumber = number => dispatch(setNumber(number));
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <div className="SetterNav">
      <Counter
        number={number}
        diff={diff}
        unit={unit}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
        onSetNumber={onSetNumber}
      />
    </div>
  );
}

export default CounterContainer;
