import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ListItem from "./Component/ListItem";

function App() {
  const intro = () => console.log("Witaj Swiecie");

  const [isActiv, setIsActiv] = useState(false);
  const handleClick = () => setIsActiv(!isActiv);
  const handleItemClick = (itemActic) => {
    console.log(itemActic);
    // const index = items.findIndex((item) => item.id === itemActic.id);
    const zmapowanaTablica = items.map((elem) => {
      if (elem.id === itemActic.id) {
        return { id: elem.id, name: elem.name, active: !elem.active };
      }
      return elem;
    });
    setItems(zmapowanaTablica);
    // console.log(index);
    //items[index].active = !items[index].active;
    // setItems([...items]); //spread operator
  };

  function handleIncrement() {
    setCount((naszCount) => naszCount + 1);
  }

  const [count, setCount] = useState(0);
  //const handleIncrement = () => setCount((prevState) => prevState + 1);
  const handleDecrement = () => setCount((prevState) => prevState - 1);
  let countlet = 0;
  function incrementLet() {
    console.log(countlet);
    countlet = countlet + 1;
  }

  function zmienStanElementuZTablicy() {}

  const [items, setItems] = useState([
    { id: 1, name: "herbata", active: true },
    { id: 2, name: "ziemniaki", active: false },
    { id: 3, name: "wrzatek", active: false },
    { id: 4, name: "kasza", active: false },
    { id: 5, name: "zupa", active: false },
    { id: 6, name: "chleb", active: true },
  ]);

  return (
    <div className="App">
      <button onClick={handleClick}>intro</button>
      <p>{isActiv ? "true" : "false"}</p>
      {/* <ol>
        {items.map((item) => (
          <li
            onClick={() => handleItemClick(item)}
            className={item.active ? "activ" : ""}
          >
            {item.name}
          </li>
        ))}
      </ol> */}
      <ol>
        {items.map((item) => (
          <ListItem name={item.name} id={item.id}></ListItem>
        ))}
      </ol>

      <button onClick={incrementLet}>zwieksz leta</button>
      <p>{countlet}</p>

      <button onClick={handleIncrement}> zwieksz licznik</button>
      <button onClick={handleDecrement}> zmniejsz licznik</button>
      <p>{count}</p>
      <ListItem name={"name"}></ListItem>
    </div>
  );
}

export default App;
