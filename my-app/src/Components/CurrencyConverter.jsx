import { useState, useMemo } from "react"
import "../styles/CurrencyConverter.css";

function CurrencyConverter(){
    const rates = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.78,
        JPY: 156.7,
    }

    const [ amount, setAmount ] = useState(1);
    const [ fromCurrency, setFromCurrency ] = useState("USD");
    const [ toCurrency, setToCurrency ] = useState("EUR");

    const convertedFromUSD = useMemo(() => {
        console.log("Recalculating...")
        return amount/rates[fromCurrency]
    }, [amount, fromCurrency]);

    const convertedAmount = convertedFromUSD * rates[toCurrency];

    return (
        <div className="container">
            <h1>Currency Converter</h1>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
            </select>
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
            </select>

            <h2>{convertedAmount.toFixed(2)}</h2>

        </div>
    )

}

export default CurrencyConverter;