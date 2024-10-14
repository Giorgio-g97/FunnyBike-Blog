import style from "./home.module.css";
import Image from "next/image";

export default function Home() {
  // throw new Error("Errore in Home"); //Simulazione error

  return (
    <>
      <div className={style.container}>
        <div className={style.textContainer}>
          <div className={style.headerContainer}>
            <h1>
              Scopri <span>Foggia</span> in Bicicletta
            </h1>
          </div>
          <div className={style.description}>
            <h3 className={style.headerDescription}>
              Unisciti a noi per esplorare la città su due ruote!
            </h3>
            <p className={style.pDescription}>
              Pedala attraverso le bellezze di Foggia, scopri angoli nascosti e
              vivi esperienze uniche con altri appassionati. Che tu sia un
              ciclista esperto o un neofita, le nostre uscite sono pensate per
              tutti!
            </p>
            <div className={style.containerBtn}>
              <h3 className={style.headerBtn}>
                <button className={style.button}>Registrati oggi</button> e
                inizia la tua avventura!
              </h3>
              <p className={style.pBtn}>
              🚴‍♀️ Foggia ti aspetta: pedala, esplora e divertiti!
              </p>
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image src="/hero.jpg" width={600} height={450} alt="hero-image" />
        </div>
      </div>
    </>
  );
}
