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
      <h1>Fast Pizza.co</h1>
    </header>
  );
}
function Menu() {
  const Pizzas = pizzaData;
  const numPizzas = Pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic all delicious
          </p>
          <ul className="pizzas">
            {Pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we're still working on menu please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaData);
  if (pizzaObj.sold) return <header />;
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={pizzaObj.photoName} alt="pizza" />
      <div>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour <= openHour && hour >= closeHour) alert("we are currently open");
  // else alert("we're closed now");

  return (
    <footer className="footer">
      {" "}
      {/* {new Date().toLocaleTimeString()}. we're currently opened */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          we're happy to welcome between {openHour}:00 to {closeHour}:00.
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "we're currently opened!");
}

function Order({ closeHour }) {
  return (
    <div class="order">
      <p>
        we're open until {closeHour}:00. Come and visit us or order online.{" "}
      </p>
      <button class="btn">order</button>
    </div>
  );
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
