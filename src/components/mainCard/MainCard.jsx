import React from "react";
import up from "../../images/icon-up.svg";
import down from "../../images/icon-down.svg";
import "./maincard.css";

const MainCard = ({ data }) => {
    return (
        <article className="maincard instagram" style={{ "--pseudo-bg": data.color }}>
            <header className="maincard__header">
                <img src={require("../../images")[data.app]} alt={data.app} />
                <p className="username">{data.username}</p>
            </header>
            <section className="maincard__content">
                <h2>{data.followers}</h2>
                <p>{data.desc}</p>
            </section>
            <footer>
                <img src={data.diff > 0 ? up : down} alt="difference" />
                <p className={data.diff > 0 ? "up" : "down"}>{Math.abs(data.diff)} Today</p>
            </footer>
        </article>
    );
};

export default MainCard;
