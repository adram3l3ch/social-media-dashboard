import MainCard from "./components/mainCard/MainCard";
import data from "./data.json";
import "./app.css";
import Overview from "./components/overview/Overview";
import { useState } from "react";
import Switch from "./components/switch/Switch";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    return (
        <main className={isDarkMode ? "app dark-mode" : "app light-mode"}>
            <div className="layout">
                <section className="dashboard">
                    <header className="dashboard__header">
                        <div className="dashboard__title">
                            <h1>Social Media Dashboard</h1>
                            <p>{`Total Followers: ${data.followers}`}</p>
                        </div>
                        <Switch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                    </header>
                    <div className="dashboard__body">
                        {data.dashboard.map(data => (
                            <MainCard data={data} key={data.app + data.desc} />
                        ))}
                    </div>
                </section>
                <section className="overview">
                    <h2>Overview - Today</h2>
                    <div className="overview__body">
                        {data.overview.map(data => (
                            <Overview data={data} key={data.app + data.title} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default App;
