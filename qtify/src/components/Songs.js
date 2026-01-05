import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import axios from "axios";
import Carousel from "./Carousel";
import Card from "./card";
import "./Songs.css";

const Songs = ({ title }) => {
    const [allSongs, setAllSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
    const [selectedTab, setSelectedTab] = useState(0);

    // Fetch data specifically for this section
    useEffect(() => {
        const fetchData = async () => {
            const songsRes = await axios.get("https://qtify-backend.labs.crio.do/songs");
            const genresRes = await axios.get("https://qtify-backend.labs.crio.do/genres");
            
            setAllSongs(songsRes.data);
            setFilteredSongs(songsRes.data);
            setGenres([{ key: "all", label: "All" }, ...genresRes.data.data]);
        };
        fetchData();
    }, []);

    // Filter logic based on tab selection
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        if (newValue === 0) {
            setFilteredSongs(allSongs);
        } else {
            const genreKey = genres[newValue].key;
            setFilteredSongs(allSongs.filter(song => song.genre.key === genreKey));
        }
    };

    return (
        <div className="songs-section-wrapper">
            <h3 className="section-header">{title}</h3>
            
            <Tabs 
                value={selectedTab} 
                onChange={handleTabChange}
                TabIndicatorProps={{ style: { backgroundColor: "#34C94B" } }}
                sx={{ marginBottom: "20px" }}
            >
                {genres.map((genre) => (
                    <Tab 
                        key={genre.key} 
                        label={genre.label} 
                        sx={{ color: "white", textTransform: "none" }} 
                    />
                ))}
            </Tabs>

            <Carousel 
                data={filteredSongs} 
                renderComponent={(item) => <Card data={item} type="song" />} 
            />
        </div>
    );
};

export default Songs;