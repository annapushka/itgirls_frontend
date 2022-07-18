
function getGIF() {
    document.getElementById('gifContainer').innerHTML = "";
    let element = document.getElementById('search__input').value;
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=dN9UtTq7TBHRLghoGOZBk1XfBETbCy6u&q=${element}&limit=5&offset=0&rating=g&lang=ru`)
        .then(response => response.json())
        .then(gifs => {
            console.log(gifs);
            console.log(gifs.data[0].url);
            let gifsArr = gifs.data;
            gifsArr.forEach(gif => {
                document.getElementById('gifContainer').innerHTML += `<img src="${gif.images.fixed_width.url}" class="gifContainer__gif" alt="gif">` 
            });
        })
        .catch(err => console.log(err));
        
}