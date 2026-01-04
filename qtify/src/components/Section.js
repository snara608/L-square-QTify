import Card from "./card";
import React, {useEffect, useState} from "react";
import "./Section.css"; // Use a regular CSS file for now
import Carousel from "./Carousel";

const Section = ({ title, fetchRes }) => {
    const [data, setData] = useState([]);
    // Start with true: Section appears as a Carousel (Collapsed) by default
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        fetchRes().then((res) => setData(res));
    }, [fetchRes]);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="section-wrapper">
            <div className="section-header">
                <h3>{title}</h3>
                {/* The button is now present for every Section instance */}
                <h4 className="toggle-text" onClick={handleToggle}>
                    {isCollapsed ? "Show All" : "Collapse"}
                </h4>
            </div>
            
            <div className="section-content">
                {isCollapsed ? (
                    /* Carousel View: Reusable and responsive */
                    <Carousel 
                        data={data} 
                        renderComponent={(item) => <Card key={item.id} data={item} />} 
                    />
                ) : (
                    /* Grid View: Multi-row wrapping display */
                    <div className="card-grid">
                        {data.map((item) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Section;