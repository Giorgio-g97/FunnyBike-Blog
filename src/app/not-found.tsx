import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <h2>Page Not Found</h2>
      <p>
        Please return to <Link href="/">Home</Link>
      </p>
    </>
  );
};

export default NotFound;
