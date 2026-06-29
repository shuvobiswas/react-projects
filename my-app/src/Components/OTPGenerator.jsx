import { useState, useEffect, useRef } from "react";

export default function OTPGenerator() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const intervalRef = useRef(null);

  function generateOTP() {
    const newOTP = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    setOtp(newOTP);
    setTimeLeft(5);
  }

  useEffect(() => {
    if (timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);

  }, [timeLeft]);

  return (
    <div className="container">

      <h1 id="otp-title">
        OTP Generator
      </h1>

      <h2 id="otp-display">
        {otp
          ? otp
          : "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="polite">
        {timeLeft > 0
          ? `Expires in: ${timeLeft} seconds`
          : otp
          ? "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>

      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={timeLeft > 0}
      >
        Generate OTP
      </button>

    </div>
  );
}