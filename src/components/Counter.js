const Counter = ({
  handleClickDown,
  handleClickUp,
  handleClickReset,
  counter,
}) => {
  return (
    <div className="counter">
      <div className="block-operation">
        <div className="operation">
          {counter > 0 ? <p onClick={handleClickDown}>-</p> : <p></p>}
        </div>
        <div className="operation">
          {counter < 10 ? <p onClick={handleClickUp}>+</p> : <p></p>}
        </div>
      </div>
      <p>{counter}</p>
      <button className="reset" onClick={handleClickReset}>
        RESET
      </button>
    </div>
  );
};
export default Counter;
