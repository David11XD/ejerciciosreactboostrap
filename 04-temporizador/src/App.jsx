import { useState, useEffect } from "react";

function Countdown() {
  //targetSeconds, elapsedSeconds
  let [targetSeconds, setTargetSeconds] = useState(null);
  let [elapsedSeconds, setElapsedSeconds] = useState(0);
  useEffect(
    function () {
      if (targetSeconds == null) return;

      //targetSecomnds tiene un valor
      setElapsedSeconds(0);

      let interval = setInterval(function () {
        console.log(elapsedSeconds);
        setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    },
    [targetSeconds]
  );

  function parseForm(ev) {
    ev.preventDefault();
    let seconds = ev.target.seconds.value;
    //console.log(seconds);
    setTargetSeconds(parseInt(seconds));
  }

  if (elapsedSeconds >= targetSeconds && targetSeconds != null) {
    return (
      <>
        <p>¡Terminó el conteo!</p>
        <button onClick={() => setTargetSeconds(null)}>Reiniciar</button>
      </>
    );
  }

  if (targetSeconds !== null) {
    return <p>Faltan {targetSeconds - elapsedSeconds} segundos</p>;
  }

  return (
    <>
      <p>¿Cuantos segundos quieres contar?</p>
      <form action="#" onSubmit={(ev) => parseForm(ev)}>
        <input type="number" name="seconds" />
        <button>Iniciar</button>
      </form>
    </>
  );
}

export default Countdown;