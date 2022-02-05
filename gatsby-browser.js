/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

//Copygatsby-browser.js: copy code to clipboard

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
