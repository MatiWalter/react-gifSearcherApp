export const getGifs = async( category ) => { 

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=15&api_key=r3Grjost7b0uzt2pNdTbCr6RRePjtnGW`;
    const response = await fetch( url );
    const { data } = await response.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}