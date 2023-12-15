import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setstep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  /*  const [test, settest] = useState({ name: "Zayem" }); */
  function handlePrevious() {
    if (step > 1) {
      setstep((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setstep((s) => s + 1);
    }
    //bad practice
    /* 
    test.name = "Azam";
    settest(name : "Azam");
     */
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            steps {step}: {messages[step - 1]} {/* {test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7050f2", color: "#ffffff" }}
              onClick={handlePrevious}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: "#7050f2", color: "#ffffff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
