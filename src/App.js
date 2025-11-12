import React from "react";
import { WorkerProvider } from "./context/WorkerContext";
import MainRouter from "./MainRouter";

function App() {
  return (
    <WorkerProvider>
      <MainRouter />
    </WorkerProvider>
  );
}

export default App;
