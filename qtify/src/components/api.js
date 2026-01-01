export const fetchTopAlbums = async () => {
    try{
        const response = await fetch("https://qtify-backend.labs.crio.do/albums/top");
        const data = await response.json()
        return data;
    } catch (error){
        console.error("Error fetching albums", error);
        return [];
    }
};