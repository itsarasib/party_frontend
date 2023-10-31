import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "./routes/routes.tsx";
import Navbar from "./components/NavBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>
);
