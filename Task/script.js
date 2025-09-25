const movie_API = `http://www.omdbapi.com/?i=tt3896198&apikey=690fb79`;

const movies_Fetch = () => {
    fetch(movie_API)
        .then((res) => res.json())
        .then((res) => Render_UI(res))
        .catch((err) => console.log(err))
        .finally(() => { console.log('API has fetched finally') });
}

const Render_UI = (movie) => {
    let mainDiv = document.getElementById("mainContainer");

    // Create card
    let cardDiv = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('h3');
    let year = document.createElement('h4');
    let genre = document.createElement('p');
    let director = document.createElement('h4');

    // Assign values from OMDb API
    img.src = movie.Poster;
    title.innerText = movie.Title;
    year.innerText = `Year: ${movie.Year}`;
    genre.innerText = `Genre: ${movie.Genre}`;
    director.innerText = `Director: ${movie.Director}`;

    // Add class
    cardDiv.className = "card-div";

    // Append children
    cardDiv.append(img, title, year, genre, director);
    mainDiv.append(cardDiv);
}

// call the function
movies_Fetch();
