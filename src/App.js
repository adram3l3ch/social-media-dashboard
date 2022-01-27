import MainCard from "./components/mainCard/MainCard";
import data from "./data.json";
import "./app.css";

function App() {
    return (
        <main className="app dark-mode">
            <section className="dashboard">
                {data.dashboard.map(app => (
                    <MainCard data={app} />
                ))}
            </section>
        </main>
    );
}

export default App;
