let input = document.getElementById("movieInput");
let search = document.getElementById("searchBtn");
let show = document.querySelector(".movieDetails")

search.addEventListener("click",async function(){
    let movieName = input.value.trim();
    if(movieName === ""){
        alert("enter your movie name")
        return;
    }

    console.log(movieName)

    let url =  `http://www.omdbapi.com/?apikey=b26734a2&t=${movieName}`;
    console.log(url);

    show.innerHTML = "<h2>Loading...</h2>";

    try{

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    if(data.Response === "False"){
        show.innerHTML="<h2>Movie not found</h2>";
        return;
    }

 show.innerHTML = `
    <img src="${data.Poster}" alt="${data.Title}">
    <h2>${data.Title}</h2>
    <p>Year: ${data.Year}</p>
    <p>Runtime:${data.Runtime}</p>
    <p>Cast:${data.Actors}</p>
    <p>Rating:${data.imdbRating}</p>
    <p>Plot: ${data.Plot}</p> 
`;

} catch(error){
    show.innerHTML = "<h2>Something went wrong !"
    console.log(error);
}


});

input.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        search.click();
    }
});
