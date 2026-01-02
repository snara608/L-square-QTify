import Card from "./card";
import React, {useEffect, useState} from "react";
import "./Section.css"; // Use a regular CSS file for now

const Section = ({ title, fetchRes }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchRes().then((res) => setData(res));
    }, [fetchRes]);
const cardsToDisplay = data.slice(0, 14);

    return (
        <div className="section-wrapper">
            <div className="section-header">
                <h3>{title}</h3>
                <h4 className="toggle-text">Collapse</h4>
            </div>
            <div className="card-grid">
            {cardsToDisplay.map((item) => (
            <Card key={item.id} data={item} />
        ))}
            </div>
            
        </div>
    );
};

export default Section;
