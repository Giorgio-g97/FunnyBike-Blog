import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-center my-48 text-5xl">Nessun post trovato 🤔</h1>
      <p className="text-center my-48 text-2xl">
        Torna alla{" "}
        <Link className="text-primary" href="/">
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
