import React from "react";

export default function Index({ data }): JSX.Element {
  return (
    <>
      <h1>Whoops! No {data.h1} here.</h1>
      <p>There is nothing here.</p>
    </>
  );
}
