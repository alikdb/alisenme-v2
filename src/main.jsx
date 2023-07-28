import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./styles/main.css";
import { Provider } from "react-redux";
import store from "./stores";
import { worker } from "~/mocks/browser";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

worker.start();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
