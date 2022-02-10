import React from "react";
import css from "./Statistical.module.css";

const Statistics = ({ stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>

    <ul className={css.statList}>
      {stats.map((stat) => (
        <li key={stat.id} className={css.item}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
