import React from "react";
import up from "../../images/icon-up.svg";
import down from "../../images/icon-down.svg";
import "./overview.css";

const Overview = ({ data }) => {
    return (
        <article className="overview__card">
            <section className="overview__top">
                <p>{data.title}</p>
                <img src={require("../../images")[data.app]} alt="" />
            </section>
            <section className="overview__bottom">
                <h3>{data.value}</h3>
                <div className={data.diff > 0 ? "diff up" : "diff down"}>
                    <img src={data.diff > 0 ? up : down} alt="" />
                    <p>{Math.abs(data.diff)}%</p>
                </div>
            </section>
        </article>
    );
};

export default Overview;
