import React from "react";
import "../styles/Section.css";
const Section = props => {
    const {title, section} = props
    return (
        <section>
            <h2>{title}</h2>
            <p>{section}</p>
        </section>
    );
};

export default Section;