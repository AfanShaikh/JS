const infoFunc = () =>{
    let information = document.getElementsByTagName("p")[0].innerText;
    console.log('🚀 ~ information:', information);
}

const generator = async () => {
    const API = `https://official-joke-api.appspot.com/random_joke`;

    const jokeDiv = document.getElementById("joke");

    try{
        let res = await fetch(API);
        let data = await res.json();
        console.log('🚀 ~ data:', data);

        let id = document.createElement("h3");
        let setup = document.createElement("h3");
        let punchline = document.createElement("h3");
        let type = document.createElement("h3");

        id.innerText = data.id;
        setup.innerText = data.setup;
        punchline.innerText = data.punchline;
        type.innerText = data.type;

        jokeDiv.append(id,setup,punchline,type);
    }
    catch(err){
        console.log('🚀 ~ err:', err);
    }
}