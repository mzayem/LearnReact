import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./pizzalist.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza.co</h1>;
    </header>
  );
}
function Menu() {
  const Pizzas = pizzaData;
  const numPizzas = Pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <div className="pizzas">
          {Pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </div>
      )}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt="pizza" />
      <div>
        <h1>{props.pizzaObj.name}</h1>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 2;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour <= openHour && hour >= closeHour) alert("we are currently open");
  // else alert("we're closed now");

  return (
    <footer className="footer">
      {" "}
      {/* {new Date().toLocaleTimeString()}. we're currently opened */}
      {isOpen && (
        <div class="order">
          <p>
            we're open until {closeHour}:00. Come and visit us or order online.{" "}
          </p>
          <button class="btn">order</button>
        </div>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "we're currently opened!");
}

//React version V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//React v18
//React.render(<App />);
