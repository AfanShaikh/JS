const API_BASE_URL =`https://fakestoreapi.com/products`

const Product_Fetch = () => {
    fetch(API_BASE_URL)
    .then((res) => res.json())
    .then((res) => Render_UI(res))
    .catch((err) => console.log(err))
    .finally(() => {console.log('api has fetch finally')})
}

const Render_UI = (value) =>{
    let mainDIiv = document.getElementById("mainContainer");
    value.map((els,index) => {
        let cardDiv = document.createElement('div');
        let img = document.createElement('img')
        let id = document.createElement('h5');
        let title = document.createElement('h3');
        let price = document.createElement('h4');
        let description = document.createElement('p');
        let category = document.createElement('h4');

        img.src = els.image;
        id.innerText = els.id;
        title.innerText = els.title;
        price.innerText = els.price;
        description.innerText = els.description;
        category.innerText = els.category;

        //! class name assign...
        cardDiv.className = "card-div"

        cardDiv.append(img,id,title,price,description,category);

        mainDIiv.append(cardDiv);
    });
}