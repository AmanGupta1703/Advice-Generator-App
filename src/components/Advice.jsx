import { useState } from "react";

export default function Advice() {
  const [advice, setAdvice] = useState({
    id: "#Advice 13",
    quote:
      "If you're feeling tired or anxious, a pint of water will almost always make you feel better.",
  });

  const getRandomAdvices = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    return data;
  };

  function handleClick() {
    getRandomAdvices().then(data => {
      setAdvice({
        id: data.slip.id,
        quote: data.slip.advice
      });
    }).catch(err => console.log("Not found!"));
  }

  return (
    <section className="advice--container">
      <h1 className="advice--id">#Advice {advice.id}</h1>
      <p className="quote">{advice.quote}</p>

      <img
        src="images/pattern-divider-desktop.svg"
        alt=""
        className="divider-desktop"
      />

      <img
        src="images/pattern-divider-mobile.svg"
        alt=""
        className="divider-mobile"
      />

      <button className="btn" onClick={handleClick}>
        <img src="images/icon-dice.svg" alt="" className="dice" />
      </button>
    </section>
  );
}
