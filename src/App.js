import "./App.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Accueil from "./components/Accueil";
import About from "./components/About";
import Books from "./components/Books";
import BookPage from "./components/BookPage";
import BookOne from "./components/BookOne";

const router = createHashRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/about/:id", // Identifiant : nbre ou chaîne de caractère unique pour chaque livre
    element: <BookPage />,
  },
  {
    path: "/books/:id",
    element: <BookOne />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
