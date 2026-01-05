import React from "react";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "./card.css"


const Card = ({data}) => {
    const { image, follows, title, likes, type }  = data;
    return (
        <div class="card-wrapper">
        <div class="card">
            <img src={image} alt="album" class="card-Image"></img>
            <div class="card-body">
            <Stack direction="row" spacing={1}>
                        {/* If type is song, show likes. Otherwise, show follows. */}
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



