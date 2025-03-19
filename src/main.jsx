import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page"; // Importando a página de erro
import Contact from "./routes/contact"; // Importando a página de contato

// Criando um único roteador
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        children: [
          {
            path: "contacts/:contactId",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

// Renderizando a aplicação corretamente
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
