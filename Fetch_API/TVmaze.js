const apiFunc = (param) =>{
    return Api_Base_URL = `https://api.tvmaze.com/search/shows?q=${param}`;
}

const api_fetch = async () =>{
    const dataSearch = document.querySelector("#search-input").value;
    console.log('🚀 ~ dataSearch:', dataSearch);
    let value = apiFunc(dataSearch);
    console.log('🚀 ~ value:', value);
    try{
        let res = await fetch(value);
        let data = await res.json();
        Render_UI(data)
    } catch(err){
        console.log('🚀 ~ err:', err);
    }
}

const Render_UI = (infoData) =>{
    console.log('🚀 ~ infoData:', infoData);
    const mainDiv = document.getElementById("mainContainer");
    mainDiv.innerHTML = ''; 
    infoData.forEach((element) => {
        element = element.show;
        const cardDiv = document.createElement("div");
        const id = document.createElement("h4");
        const img = document.createElement("img");
        const name = document.createElement("h4");
        const language = document.createElement("h4");
        const genres = document.createElement("h4");
        const runtime = document.createElement("h4");
        const rating = document.createElement("h4");
        const summary = document.createElement("p");

        id.innerText = `id ${element.id}`;
        img.src = element.image.original;
        name.innerText = `name ${element.name}`;
        language.innerText = `language ${element.language}`;
        genres.innerText = `genres ${element.genres}`;
        runtime.innerText = `runtime ${element.runtime}`;
        rating.innerText = `rating ${element.rating.average}`;
        summary.innerHTML = `summary ${element.summary}`;

        //class name 
        cardDiv.className = "card-Div"

        cardDiv.append(img,id,name,language,genres,runtime,rating,summary);
        mainDiv.append(cardDiv);
    });
}
