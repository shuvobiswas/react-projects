import { useState } from "react"
import OTPGenerator from "./Components/OTPGenerator";
import  ShoppingList  from "./Components/ShoppingList";
import CurrencyConverter from "./Components/CurrencyConverter"
import Board from "./Components/Board";

function App() {

  const [ project, setProject] = useState("")

  return (
    <div>
      {/* <OTPGenerator /> */}
      {/* <ShoppingList /> */}
      {/* <CurrencyConverter /> */}
      <button onClick={() => setProject("otp")}>OTP Generator</button>
      <button onClick={() => setProject("shopping")}>Shopping List</button>
      <button onClick={() => setProject("currency")}>Currency Converter</button>
      <button onClick={() => setProject("board")}>Tic Tac Toe</button>

      {project === "otp" && <OTPGenerator />}
      {project === "shopping" && <ShoppingList />}
      {project === "currency" && <CurrencyConverter />}
      {project === "board" && <Board />}
    </div>
  );
}

export default App;