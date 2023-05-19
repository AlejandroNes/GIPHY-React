export const getAPI = async (item) => {
    const key = 'tu_key';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${item}&limit=6`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const respuesta = data.map(item => ({
        id: item.id,
        titulo: item.title,
        imagen: item.images.downsized_medium.url
    }))
    return respuesta;
}