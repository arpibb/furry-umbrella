/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import Layout from "./src/components/layout";
import "./src/components/layout.css";
import { MenuContextProvider } from "./src/context/menuContext";
import { GlobalStyles } from "./src/styles/GlobalStyles";

export const wrapRootElement = ({ element }) => (
  <MenuContextProvider>{element}</MenuContextProvider>
);

export const wrapPageElement = ({ element, ...props }) => (
  <>
    <GlobalStyles />

    <Layout {...props}>{element}</Layout>
  </>
);
