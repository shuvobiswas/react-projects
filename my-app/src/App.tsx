import { useState } from "react"
import OTPGenerator from "./Components/OTPGenerator";
import  ShoppingList  from "./Components/ShoppingList";
import CurrencyConverter from "./Components/CurrencyConverter"

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

      {project === "otp" && <OTPGenerator />}

      {project === "shopping" && <ShoppingList />}

      {project === "currency" && <CurrencyConverter />}
    </div>
  );
}

export default App;