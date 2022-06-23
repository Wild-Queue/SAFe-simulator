import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import ThirdPage from "./Pages/ThirdPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdPage
    features={[
      "01",
      "21",
      "32",
      "34",
      "41",
      "61",
      "63",
      "71",
      "72",
      "81",
      "91",
    ]}
  />
);
