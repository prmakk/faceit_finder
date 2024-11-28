import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

import "./styles/global.scss";
import "./styles/normalize.css";
import HomePage from "./pages/home/HomePage";
import Header from "./components/header/Header";
import { userStore } from "./store/store";

function App() {
    const { theme } = userStore();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <main className="container">
            <Header />
            <HomePage />
            <Toaster />
        </main>
    );
}

export default App;
