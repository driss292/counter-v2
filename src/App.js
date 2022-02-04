import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [tab, setTab] = useState([<Counter />]);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    const newTab = [...tab];
    newTab.push(<Counter />);
    setTab(newTab);
  };
  const handleClickDown = () => {
    setCounter(counter - 1);
  };
  const handleClickUp = () => {
    setCounter(counter + 1);
  };
  const handleClickReset = () => {
    setCounter(0);
  };

  return (
    <div>
      {tab.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <Counter
        counter={counter}
        handleClickDown={handleClickDown}
        handleClickUp={handleClickUp}
        handleClickReset={handleClickReset}
      />
      <button onClick={handleClick}>AJOUT</button>
    </div>
  );
};

export default App;
