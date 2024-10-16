import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center pt-32 px-10 flex flex-col gap-5">
      <h1 className="text-5xl md:text-8xl font-bold mb-5">
        Scopri <span className="text-primary">Foggia</span> in Bicicletta
      </h1>
      <h3 className="text-3xl">
        Unisciti a noi per esplorare le meraviglie di Foggia, pedalando insieme!
      </h3>
      <p className="max-w-[750px] mx-auto leading-8 text-xl">
        Vivi un'esperienza unica! La nostra associazione organizza uscite in
        bicicletta adatte a tutti, per scoprire angoli nascosti di questa
        splendida città.Che tu sia un ciclista esperto o un principiante, Foggia
        ti aspetta per un'avventura indimenticabile!
      </p>
      <Image
        className="rounded-3xl shadow-2xl"
        src="/hero.jpg"
        width={1280}
        height={450}
        alt="Immagini di gruppo di ciclisti"
      />
    </main>
    //Video at 14:52
  );
}
