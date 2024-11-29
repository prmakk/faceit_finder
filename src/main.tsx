import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import "./utils/i18n/i18next.ts";
import { Suspense } from "react";
import Loader from "./components/loader/Loader.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Suspense fallback={<Loader />}>
            <App />
        </Suspense>
    </BrowserRouter>
);
