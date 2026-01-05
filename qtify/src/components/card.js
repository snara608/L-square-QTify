import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "./card.css"


const Card = ({ data, type }) => { // Extract type from props, not from data
    const { image, follows, title, likes } = data;
    return (
        <div className="card-wrapper"> {/* Use className, not class */}
            <div className="card">
                <img src={image} alt="album" className="card-Image" />
                <div className="card-body">
                    <Stack direction="row" spacing={1}>
                        <Chip 
                            className="card-chip" 
                            label={type === "song" ? `${likes} Likes` : `${follows} Follows`} 
                        />
                    </Stack>
                </div>
            </div>
            <p className="album-title-text">{title}</p>
        </div>
    );
}
export default Card;



