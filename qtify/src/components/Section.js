import Card from "./card";
import React, {useEffect, useState} from "react";
import "./Section.css"; // Use a regular CSS file for now

const Section = ({ title, fetchRes, limit }) => {
    const [data, setData] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        fetchRes().then((res) => setData(res));
    }, [fetchRes]);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed)
    }
    const displayData = limit ? data.slice(0, limit) : data;

    return (
        <div className="section-wrapper">
            <div className="section-header">
                <h3>{title}</h3>
                <h4 className="toggle-text" onClick={handleToggle}>{isCollapsed ? "Show All" : "Collapse"}</h4>
            </div>
            <div className="card-grid">
                {displayData.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default Section;
