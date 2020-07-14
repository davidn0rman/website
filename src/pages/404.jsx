import React from "react";
// import { graphql } from "gatsby"
// import styles from "./styles/404.module.scss"

export default function Index(data) {
  return (
    <>
      <h1>Whoops! No {data.h1} here.</h1>
      <p>There is nothing here.</p>
    </>
  );
}

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         shortname
//       }
//     }
//   }
// `
