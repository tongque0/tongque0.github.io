import clsx from "clsx";
import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <h1 className={clsx("hero__title", styles.title)}>
                    Hi. I'm <span className={styles.highlighted}>Tong Que</span>,
                    <br />
                    Full-stack Cloud Developer.
                </h1>
                <p className={clsx("hero__subtitle", styles.subtitle)}>
                    对个人成长和技术趋势感兴趣的软件工程师。
                    <br /> 云原生和开源爱好者。
                </p>
            </div>
        </header>
    );
};
