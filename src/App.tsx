import HomePage from "./pages/home/HomePage";
import Header from "./components/header/Header";

import "./styles/global.scss";
import "./styles/normalize.css";

function App() {
    return (
        <main className="container">
            <Header />
            <HomePage />
        </main>
    );
}

export default App;
