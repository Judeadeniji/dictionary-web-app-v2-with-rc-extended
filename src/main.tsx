import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "rc-extended/components"
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={e => e?.stack}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
