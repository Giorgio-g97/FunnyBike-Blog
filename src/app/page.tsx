import style from "./home.module.css";
import Image from "next/image";

export default function Home() {
  // throw new Error("Errore in Home"); //Simulazione error

  return (
    <>
      <div className={style.container}>Homepage</div>
      <div className={style.textContainer}>
        <h1>Scopri Foggia in Bicicletta</h1>
        <h3>Unisciti a noi per esplorare la città su due ruote!</h3>
        <p>
          Pedala attraverso le bellezze di Foggia, scopri angoli nascosti e vivi
          esperienze uniche con altri appassionati. Che tu sia un ciclista
          esperto o un neofita, le nostre uscite sono pensate per tutti!
        </p>
        <div>
          <h3>
            🚴‍♀️ <button>Registrati oggi</button> e inizia la tua avventura!
          </h3>
          <p>Foggia ti aspetta: pedala, esplora e divertiti!</p>
        </div>
      </div>
      <div className={style.imageContainer}>
        
      </div>
    </>
  );
}
