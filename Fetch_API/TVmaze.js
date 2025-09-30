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
    infoData.forEach((els) => {
        els = els.show;
        let cardDiv = document.createElement("div");
        let id = document.createElement("h4");
        let img = document.createElement("img");
        let name = document.createElement("h4");
        let language = document.createElement("h4");
        let genres = document.createElement("h4");
        let runtime = document.createElement("h4");
        let rating = document.createElement("h4");
        let summary = document.createElement("p");

        id.innerText = `id ${els.id}`;
        img.src = els.image.medium;
        name.innerText = `name ${els.name}`;
        language.innerText = `language ${els.language}`;
        genres.innerText = `genres ${els.genres}`;
        runtime.innerText = `runtime ${els.runtime}`;
        rating.innerText = `rating ${els.rating.average}`;
        summary.innerHTML = `summary ${els.summary}`;

        //class name 
        cardDiv.className = "card-Div"

        cardDiv.append(img,id,name,language,genres,runtime,rating,summary);
        mainDiv.append(cardDiv);
    });
}
