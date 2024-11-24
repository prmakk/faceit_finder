import { Toaster } from "react-hot-toast";

import "./styles/global.scss";
import "./styles/normalize.css";

import HomePage from "./pages/home/HomePage";
import Header from "./components/header/Header";

function App() {
    return (
        <main className="container">
            <Header />
            <HomePage />
            <Toaster />
        </main>
    );
}

export default App;
