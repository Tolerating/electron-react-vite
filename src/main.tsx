import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import routes from "./router/index";
import "./index.css";
import "./style.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store/index";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>loading...</div>}>
        <RouterProvider router={routes} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
